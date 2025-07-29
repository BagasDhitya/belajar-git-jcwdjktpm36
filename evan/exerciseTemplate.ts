console.log("kerjakan exercise di folder ini");

// Multiplication table
const number = 9;
const tableLength = 10;

for (let i = 1; i <= tableLength; i++) {
  console.log(`${number} x ${i}`);
}

// palindrome

const palindromeWord = "madam";

console.log(
  palindromeWord == palindromeWord.split("").reverse().join("")
    ? "Palindrome word"
    : "Not a palindrome word"
);

// cm to km

const cm = 100000;
const kmMeasurement = 100000;

console.log(`${cm / kmMeasurement} km`);

// rp currency

const money = 10000;

console.log(`Rp. ${money.toLocaleString("id-ID")},00`);

// search string

const searchString = "ell";
const originalString = "Hello World";

const newString = originalString.replace(searchString, "");

console.log(newString);

// capitalize word

const originalWord = "hello world";

const words = originalWord.split(" ");
let capitalizeWords: string[] = [];

for (let i = 0; i < words.length; i++) {
  capitalizeWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
}

console.log(capitalizeWords.join(" "));

// swap case of each character

const words2 = "The QuiCk BrOwN Fox";
const words2Array = words2.split("");
let changedWords: string[] = [];

for (let i = 0; i < words2Array.length; i++) {
  if (words2Array[i] == words2Array[i].toUpperCase()) {
    changedWords.push(words2Array[i].toLowerCase());
  } else {
    changedWords.push(words2Array[i].toUpperCase());
  }
}

console.log(changedWords.join(""));

// largest integer

const num1 = 24;
const num2 = 47;
let largestInteger: number = num2;

if (num1 > num2) largestInteger = num1;

console.log(largestInteger);

// sort number

const sortNum1 = 42;
const sortNum2 = 27;
const sortNum3 = 18;

const sorted = [sortNum1, sortNum2, sortNum3].sort((a, b) => a - b);
console.log(sorted.join());

// type checker

const variable = "hello";
let type: number = 0;

if (typeof variable == "string") {
  type = 1;
} else if (typeof variable == "number") {
  type = 2;
} else {
  type = 3;
}

console.log(type);

// replace A letter

const wordToBeReplaced = "An apple a day keeps the doctor away";

const replacedWords = wordToBeReplaced
  .replaceAll("a", "*")
  .replaceAll("A", "*");

console.log(replacedWords);
