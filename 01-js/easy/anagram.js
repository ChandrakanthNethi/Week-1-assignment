/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var letterCounter = new Map();

  for (var char of str1) {
    if (letterCounter.has(char)) {
      letterCounter.set(char, letterCounter.get(char)+1);
    } else {
      letterCounter.set(char, 1);
    }
  }

  for (var char of str2) {
    if (letterCounter.has(char)) {
      letterCounter.set(char, letterCounter.get(char)-1);
    }
  }

  for (var char of str1) {
    if (letterCounter.get(char) != 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
