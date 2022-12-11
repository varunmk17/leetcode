const externalServiceBaseUrlGet = "https://<url>"

const externalServiceBaseUrlPost ="https://<url>"


// GET API Data
const getData = async () => {
  const response = await fetch(externalServiceBaseUrlGet, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  return response;
};

// Post API Data
const postData = async (data) => {
  const response = await fetch(externalServiceBaseUrlPost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  return response;
};

// Get all partners By Country who are all available for two consecutive days.
const getPartnersAvailability = (data) => {
  const oneDayInMs = 1000 * 60 * 60 * 24;

  const partnersAvailability = data.partners.reduce((acc, curr) => {
    const { email, country, availableDates } = curr;

    const availableDatesSet = new Set(
      availableDates.map((date) => new Date(date).toDateString())
    );

    for (let i = 0; i < availableDates.length; i++) {
      const currentDay = new Date(availableDates[i]);
      const nextDay = new Date(currentDay.getTime() + oneDayInMs);

      const isPartnerAvailableNextDay = !!availableDatesSet.has(
        nextDay.toDateString()
      );

      acc[country] = acc[country] || {};
      if (isPartnerAvailableNextDay) {
        acc[country][availableDates[i]] = acc[country][availableDates[i]] || [];
        acc[country][availableDates[i]].push(email);
      }
    }

    return acc;
  }, {});

  return partnersAvailability;
};

// Find Maximum Partners available for earliest consecutive days.
const getEarliestMaxAvailabilityByCountry = (partnersAvailability) => {
  const maxAvailability = Object.entries(partnersAvailability).reduce(
    (acc, [country, availability]) => {
      let maxCount = 0;

      // No partners available for that country
      if (availability && Object.keys(availability).length === 0) {
        acc.push([
          {
            attendeeCount: 0,
            attendees: [],
            name: country,
            startDate: null,
          },
        ]);
      }

      const maxAvailabilityByCountry = Object.entries(availability).reduce(
        (acc, [startDate, partners]) => {
          const attendeeCount = partners.length;

          if (attendeeCount > maxCount) {
            acc[country] = {
              attendeeCount: partners.length,
              attendees: partners,
              name: country,
              startDate,
            };

            maxCount = attendeeCount;
          }
          return acc;
        },
        {}
      );

      acc.push(maxAvailabilityByCountry);
      return acc;
    },
    []
  );

  return maxAvailability;
};

const run = async () => {
  // Get API Data
  const apiData = await getData();

  
  const partnersAvailability = getPartnersAvailability(apiData);

  const maxAvailabilityByCountry =
    getEarliestMaxAvailabilityByCountry(partnersAvailability);

  // Format Data for POST
  const finalResponse = {
    countries: maxAvailabilityByCountry.flatMap((x) => Object.values(x)),
  };

  // POST Data
  await postData(finalResponse)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  // console.log(JSON.stringify(finalResponse));
};

run();
