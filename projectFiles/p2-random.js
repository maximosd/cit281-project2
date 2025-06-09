/*
    CIT 281 Project 1
    Name: Maximo Stowers-DeWolfe
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(minLength, maxLength) {
    return Math.floor(Math.random() * (maxLength - minLength) + minLength);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //let result = "";
  
/*
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
    getRandomLetter();
  }
*/

// Returns a random lowercase letter from 'alphabet'
function getRandomLetter() {
    return alphabet[getRandomInteger(0, alphabet.length)];
}
// Returns a random string of lowercase letters
function getRandomString(minLength, maxLength) {
    let length = getRandomInteger(minLength, maxLength);
    let result = "";
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    return `${length} lowercase letters: ${result}`;
};

//returns a sorted string of random lowercase letters
const getSortedString = (string) => string.split("").sort().join("");
//console.log(getSortedString("sjdhjfjejsoiqj"));
console.log(getRandomString(10,20));