/*

Question 45

Write a function that calculates the factorial of a number. The factorial of a number is the product of all positive integers up to that number. 
For example, the factorial of 5 (5!) is calculated as:

5!=5×4×3×2×1=120

THIS IS RECURSION FUNCTION!

*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

const factorial2 = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
};

console.log(factorial2(5)); // arrow function ile yapilandirilmasi second way !

/*

Question 46

 Fibonacci dizisi, her sayının kendisinden önce gelen iki sayının toplamı olduğu bir sayı dizisidir. Dizi genellikle 0 ve 1 ile başlar.

Fibonacci Dizisi Sorusu:
Soru: Fibonacci dizisinin n. elemanını bulan bir fonksiyon yazın. Fibonacci dizisi şu şekilde tanımlanır:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) (n > 1 için)

*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(5));

/*

Question 46

JS-CC-01 : Reverse String
Purpose of the this coding challenge is to write a code that given a string , returns reverse of it. $$$$$ IMPORTANT !!! 

*/

function tersDondurme(kelime) {
  let tersKelime = "";

  for (let i = kelime.lenght - 1; i >= 0; i--) {
    terskelime + -kelime[i];
  }

  console.log(tersKelime);
}

tersDondurme(str);

/*

Question 46

JS-CC-02 : Check Palindrome
Purpose of the this coding challenge is to write a code that checks whether a string is palindromic or not.

What is palindrome?

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, and the sentence: "A man, a plan, a canal – Panama".

*/

const tersDondurme = (kelime) => {
  return kelime.split("").reverse().join("");
};

const palindrome = (kelime, tersDondurme) =>
  kelime === tersDondurme(kelime) ? true : false;

console.log(palindrome("madam", tersDondurme)); // true
console.log(palindrome("hello", tersDondurme)); // false

/*

Question 46



*/
