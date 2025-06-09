/*
    CIT 281 Project 1
    Name: Maximo Stowers-DeWolfe
*/
//this file will be used to rewrite the functions into function expressions

// Returns a random number between min (inclusive) and max (exclusive)
//rewriting getRandomInteger as a function expression using the arrow function syntax

const getRandomInteger = (minLength, maxLength) => {
    return Math.floor(Math.random() * (maxLength - minLength) + minLength);
  };

/*
function getRandomInteger(minLength, maxLength) {
    return Math.floor(Math.random() * (maxLength - minLength) + minLength);
  }
  */

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//let result = "";
  
/*
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
    getRandomLetter();
  }
*/

// Returns a random lowercase letter from 'alphabet'
//rewriting getRandomLetter as a function expression using the arrow function syntax

const getRandomLetter = () => {
    return alphabet[getRandomInteger(0, alphabet.length)];
  };

/*
function getRandomLetter() {
    return alphabet[getRandomInteger(0, alphabet.length)];
}
*/

// Returns a random string of lowercase letters
//rewriting getRandomString as a function expression using the arrow function syntax

const getRandomString = (minLength, maxLength) => {
    //let length = getRandomInteger(minLength, maxLength);
    let length = getRandomInteger(minLength, maxLength);
    let result = "";
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    return `${length} lowercase letters: ${result}\n${getSortedString(result)}`;
};

/*
function getRandomString(minLength, maxLength) {
    let length = getRandomInteger(minLength, maxLength);
    let result = "";
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    return `${length} lowercase letters: ${result}`;
};
*/

//returns a sorted string of random lowercase letters
const getSortedString = (string) => string.split("").sort().join("");

//console.log("sjdhjfjejsoiqj");
console.log(getRandomString(10,20));