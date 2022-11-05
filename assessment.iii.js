/*
Given the passage of text, count the number 1 or 2 letter text patterns that start with the letter 'i'
A text pattern starting with the letter 'i' is defined as
A 1 or 2 character pattern in a word that starts with the letter 'i'
The letter 'i' by itself
The letter 'i' at the end of a word
The letter 'i' plus the letter that immediately follows it in the same word
Text patterns are case-insensitive; ‘i' and 'I’ should be treated as the same
Punctuation attached to a word should be ignored

Examples
‘I' → 'i’
‘alumni’ → 'i'
‘financial’ → ‘in’, ‘ia’
‘sight’ → ‘ig’

Output from this process should be a list of patterns and the number of times each pattern occurs, sorted in descending order by count
Should look something like …
is=5,it=3,iv=3,i=1,ie=1

Example text:

I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.
Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.
The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:
For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.

*/


const text = `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.
Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.
The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:
For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`

const findPattern = (text = '') => {
  let patternMap = new Map();
  
  const words = text.split(' ')
    .map(word => word.replace('/^W+/gi', '').replace('\n', '').toLowerCase());
    
  const totalWords = words.length;
  let sortedResult = Array(totalWords).fill(0);

  for (let word of words) {
    if (word === 'i') {
      if (patternMap.has(word)) {
        patternMap.set(word, patternMap.get(word) + 1);
      } else {
        patternMap.set(word, 1)
      }
      continue;
    }

    let wordLen = word.length;

    for (let i = 0; i < wordLen - 1; i++) {
      if (word[i] === 'i' && word[i + 1]) {
        let pattern = `i${word[i + 1]}`
        
        if (patternMap.has(pattern)) {
          patternMap.set(pattern, patternMap.get(pattern) + 1);
        } else {
          patternMap.set(pattern, 1)
        }
      }
    }
  }

  for (let [key, val] of patternMap.entries()) {
    sortedResult[val] = sortedResult[val] || [];
    sortedResult[val].push(key);
  }
  
  return sortedResult;
}

const sortedResult = findPattern(text);

const result = []
for(let i = sortedResult.length - 1; i >= 0; i--) {
    if(sortedResult[i] != 0) {
        for(let el of sortedResult[i]) {
            result.push(`${el}=${i}`);
        }
    }
}

console.log(result.join(','));
