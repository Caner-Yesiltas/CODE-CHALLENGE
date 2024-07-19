/*

Question 1 %80-90

JS-CC-01 : Reverse String
Purpose of the this coding challenge is to write a code that given a string , returns reverse of it.

Learning Outcomes
At the end of the this coding challenge, students will be able to;

analyze a problem, identify and apply programming knowledge for appropriate solution.

demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

Problem Statement
Write a code that takes a string and reverses the letters in place.

Examples:

reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

reverse("Happy") ➞ yppaH

⌛ Happy Coding ✍

*/

function reverseString(str) {
  reverseStr = "";

  reverseStr = str.split("").reverse().join("");

  return reverseStr;
}

console.log(reverseString("Uber"));

//2 . yol for dongusu ile yapilisi

function reverseStringWithFor(str) {
  let reverseStr2 = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr2 += str[i]; // karakterleri tekrar isledigimiz icin [] array parantezi kullandik
  }

  return reverseStr2;
}

console.log(reverseStringWithFor("Uber"));

/*

Question 2 %70-80

JS-CC-02 : Check Palindrome
Purpose of the this coding challenge is to write a code that checks whether a string is palindromic or not.

What is palindrome?

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, and the sentence: "A man, a plan, a canal – Panama".

Learning Outcomes
At the end of the this coding challenge, students will be able to;

analyze a problem, identify and apply programming knowledge for appropriate solution.

demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

Problem Statement
Take an input from user.

Check that input whether it is palindromic or not:

if palindromic then console log that it is palindromic

if not palindromic then console log that it is not palindromic

⌛ Happy Coding ✍

*/

function checkPalindrome(str) {
  let reverseStr2 = "";

  reverseStr2 = str.split("").reverse().join("");

  if (reverseStr2 === str) {
    console.log("it is palindromic");
  } else {
    console.log("It is not palindromic");
  }

  return reverseStr2; // degeri geri dondurur eger bos birakirsak returnsiz undefined der
}

console.log(checkPalindrome("SAS"));

/*

Question 3  %40-50

JS-CC-03 : Roman Numerals
Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

Example:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII
Learning Outcomes
At the end of the this coding challenge, students will be able to;

Analyze a problem, identify and apply programming knowledge for appropriate solution.

Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

Problem Statement
Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

*/

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}

//2nd way

function convertToRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  return romanNumerals.reduce((result, [symbol, value]) => {
    result += symbol.repeat(Math.floor(num / value));
    num %= value;
    return result;
  }, "");
}

// Test
console.log(convertToRoman(8)); // VIII
console.log(convertToRoman(148)); // CXLVIII
console.log(convertToRoman(457)); // CDLVII
console.log(convertToRoman(2008)); // MMVIII

/*

Question 4 %60-70

JS-CC-04 : Anagram Check
Anagrams are words or phrases formed by rearranging the letters of another, such as listen and silent or triangle and integral.

Write a JavaScript function called areAnagrams that takes two strings as input and returns true if the two strings are anagrams of each other, and false otherwise.

Learning Outcomes
At the end of the this coding challenge, students will be able to;

analyze a problem, identify and apply programming knowledge for appropriate solution.

demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

Problem Statement
Your function should be case-insensitive and ignore spaces and punctuation.
It should return true if the input strings have the same set of characters (ignoring order), and false otherwise.
Some anagram examples:

console.log(areAnagrams("listen", "silent")); // Should print true
console.log(areAnagrams("triangle", "integral")); // Should print true
console.log(areAnagrams("debit card", "bad credit")); // Should print true
console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true

console.log(areAnagrams("hello", "world")); // Should print false
console.log(areAnagrams("apple", "banana")); // Should print false
console.log(areAnagrams("hello", "holla")); // Should print false
console.log(areAnagrams("race", "racing")); // Should print false
⌛ Happy Coding ✍

const anagram = (str1, str2) => { //'verdiğimiz iki stringin anagram olup olamdıklarını kontrol edecek fonksiyon.
  function kontrol(str) { //'içerdeki kontrol fonksiyonu
    return str //?küçük harfe çevir
      .replace(/[^a-z0-9]/g, "") //?harf ve rakam dışındaki tüm karakterleri kaldır

*/

function areAnagrams(str1, str2) {
  // Küçük harfe dönüştürme ve sıralama işlemi yap
  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");

  // Normalize edilmiş stringleri karşılaştır
  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); // true
onsole.log(areAnagrams("hello", "world")); // false
