// console.log('Hello world');
const fs  = require('fs')

const dataSet = [{
    placeId: '1f1689e1-5243-4c33-b1f6-2838321c4a05',
    device_id: '00825eaa-f457-4dc5-b132-c4a5bf0be85a',
    timestamp: 1666182135
}, {
    placeId: 'c61f0d91-cb48-4230-b867-96f1b706a5d1',
    device_id: 'c61f0d91-cb48-4230-b867-96f1b706a5d1',
    timestamp: 1666182895
},{
    placeId: '85a4dc6f-0eae-4aee-8c5e-dac370e7b731',
    device_id: '1da01092-b554-4499-a598-4e1fd9311904',
    timestamp: 1666184450
},{
    placeId: 'c61f0d91-cb48-4230-b867-96f1b706a5d1',
    device_id: '1da01092-b554-4499-a598-4e1fd9311904',
    timestamp: 1666184455
},{
    placeId: '85a4dc6f-0eae-4aee-8c5e-dac370e7b731',
    device_id: '1da01092-b554-4499-a598-4e1fd9311904',
    timestamp: 1666184455
}];

let alreadyVisitedDevice = new Set();

const popularityMap = dataSet.reduce((acc, curr) => {
    const { placeId, device_id } = curr; 

    if(alreadyVisitedDevice.has(`${placeId}:${device_id}`)) return acc;
    
    acc[placeId] = acc[placeId] ? acc[placeId] + 1: 1;
    
    alreadyVisitedDevice.add(`${placeId}:${device_id}`)
    return acc;
}, {})

// console.log(popularityMap)

let popularPlace = Array(Object.keys(popularityMap).length + 1).fill(0);

for(let [place, visits] of Object.entries(popularityMap)) {
    popularPlace[visits] = popularPlace[visits] || []
    popularPlace[visits].push(place);
}

popularPlace = popularPlace.filter(x => x !== 0);

console.log(popularPlace[popularPlace.length - 1])
