import { readFileSync } from "fs";

const path = "./src/words.json";
const getWords = JSON.parse(readFileSync(path));
const words = getWords.wordList;

function randomWord(allowRepeatedLetters, wordLength) {
  const filteredWords = words.filter((word) => {
    if (!allowRepeatedLetters) {
      const letterCounts = {};
      for (let letter of word) {
        if (letterCounts[letter]) {
          return false;
        }
        letterCounts[letter] = true;
      }
    }
    if (wordLength && word.length !== wordLength) {
      return false;
    }
    return true;
  });
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  const wordToGuess = filteredWords[randomIndex];
  return wordToGuess;
}

export default randomWord();
/* 
const getFive = words[0].wordsFive;
const getTen = words[1].wordsTen;

export function getRandomWordFive() {
  const randomIndexFive = Math.floor(Math.random() * getFive.length);

  const fiveLetterWord = getFive[randomIndexFive];
  return fiveLetterWord;
}

export function getRandomWordTen() {
  const randomIndexTen = Math.floor(Math.random() * getTen.length);

  const tenLetterWord = getTen[randomIndexTen];

  return tenLetterWord;
} */
