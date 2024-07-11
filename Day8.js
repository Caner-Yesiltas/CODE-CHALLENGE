/*

Question 47 toUpperCase , toLowerCase

Convert all the letters of a string to uppercase.

*/

const anime = "solo leveling";
const convertToAnime = anime.toUpperCase();
console.log(convertToAnime);

const allSmallLetters = convertToAnime.toLowerCase();
console.log(allSmallLetters);

/*

Question 48 chartAt

Find the character at a specific index in a string.

*/

const forLove = "lOVE IS LOVE ";
const findLove = forLove.charAt(6);
const findLoveEnd = forLove.charAt(13);

console.log(findLove);
console.log(findLoveEnd);

/*

Question 49 includes

Check if a string contains a specific substring.

*/

const fullstack = "react, javascript, HTML";
const findLibrary = fullstack.includes("react");
console.log(findLibrary);

/*

Question 50 index of

Find the index of the first occurrence of a specific substring in a string.

*/

const animewars = "Son Goku vs Saitama";
const Winner = animewars.indexOf("Saitama");
console.log(Winner);

/*

Question 51 slice

Write a function in JavaScript that takes a string as input and returns a new string containing 
only the first and last 3 characters of the original string. Use the slice() method to achieve this.

*/

const ichigo = "1000 Thousand Years Blood";
const lastSeason = ichigo.slice(0, 3);
const lastSeason2 = ichigo.slice(-3);
console.log(lastSeason);

/*

Question 52 Split

Write a function in JavaScript that takes a sentence as input and returns an array of the first three words. Use the split() method to achieve this.

*/

const anime2 = "anime is not a cartoon o_o"; // first Way
const words = anime2.split(" ");

let firstThreeWords = [];

for (let i = 0; i < 3; i++) {
  firstThreeWords.push(words[i]);
}

console.log(firstThreeWords);

function getFirstThreeWords(sentence) {
  const words2 = sentence.split(" ");

  return words2.slice(o, 3);
}

/*

Question 53 Replace

Write a function in JavaScript that takes a string as input and replaces all occurrences of the word "cat" with "dog". Use the replace() method to achieve this.

*/

function replaceCatWithDog(input) {
  return input.replace(/cat/g, "dog");
}

console.log(replaceCatWithDog("The cat is on the roof. The cat is black"));

//---------------------------------

function replaceRoofWithTop(input) {
  return input.replace(/roof/g, "top");
}

console.log(replaceRoofWithTop("The cat is on the roof. The cat is black."));
// console: "The cat is on the top. The cat is black."

/*

Question 54 Concat

What will be the result of concatenating an array with a nested array using the concat method? 

*/

const dragonball = ["Piccolo", "Son Goku"];
const onepunchman = ["Saitama", "Genos"];

let result = dragonball.concat(onepunchman);
console.log(result);

/*

Question 55 Trim

The trim method in JavaScript is used to remove whitespace from both ends of a string. Whitespace in this context includes spaces, tabs, and any other whitespace characters.

*/

let sololeveling = " Jin woo is coming back";

let sololevelingseason2 = sololeveling.trim();

console.log(sololevelingseason2);

/*

Question 56 

Given the string str = "Hello, World!", what will be the result of the following code?

*/

str = "ozlem bazen koyuyor";
let result3 = str.substring(7, 12);
console.log(result3);

/*

Question 57

Given the string str = "Hello, World!", what will be the result of the following code?

*/

let str2 = ["Hello", "World!"];
let newstr2 = str2.join(",");

console.log(newstr2);
