/*

Question 58  INTERVIEW QUESTION

Write a function that takes a string as input and returns the string reversed.

*/

function reverseString(str) {
  let newReverseString = "";
  let characters = str.split("");
  console.log(characters); // nasil parcalandigini gormek icin yazdim

  for (let i = characters.length - 1; i >= 0; i--) {
    newReverseString += characters[i];
  }

  return newReverseString;
}

console.log(reverseString("Fight Club is real"));

/*

Question 59  INTERVIEW QUESTION

Write a function that counts the number of vowels in a given string. Vowels are 'a', 'e', 'i', 'o', 'u'.

*/

function countWowels(str2) {
  str2 = str2.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str2.length; i++) {
    if (vowels.includes(str2[i])) {
      // wowels dizisinin icinde str2 karakteri olup olmadigini kontrol et
      count++;
    }
  }
  return count;
}
console.log(countWowels("Homelander"));
