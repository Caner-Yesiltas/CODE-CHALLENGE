/*
Question 38

Write a function named concatenate that takes two parameters, str1 and str2, and returns a single string that is the concatenation of str1 and str2.

*/

function concatenate(str1, str2) {
  result = str1 + str2;
  return result;
}

console.log(concatenate("jin", "Woo"));

/*
Question 39

Write a function that takes two numbers and returns their sum


*/

function caner(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(caner(1, 2));

/*

Question 40

Write a function that converts each element in an array to a string


*/

function convertToString(arr) {
  return arr.map(String);
}

console.log(convertToString([1, 2, 3]));

/*

Question 41

 Write a function that checks if a number is positive


*/

function checkPositiveNumber(number) {
  let result;

  if (number > 0) {
    result = "Positive";
  } else if (number < 0) {
    result = "Negative";
  } else {
    result = "Notr";
  }

  return result;
}

console.log(checkPositiveNumber(-5));

/*

Question 41

 Write a function that determines if a number is even or odd


*/

function detectEvenOrOddNumbers(Number2) {
  let result2;

  if (Number2 % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(detectEvenOrOddNumbers(7));

/*

Question 41

word count app , kelime sayisi bulma uygulamasi 


*/

let metin = "Suanda yalova'da Javascript egitimi cekmekteyim";

let harf = prompt("Harfi Giriniz");

let sonuc = bul(harf);

alert("harf Sayisi: " + sonuc);

function bul(harf) {
  let toplam = 0;

  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i) === harf) {
      // metnin sifirinci indexindeki karakter (s) esitmi benim dedigim harfe charat index alir
      toplam += 1;
    }
  }
  return toplam;
}

/*

Question 42

arrow function that returns the sum of two numbers

*/

const addition = (a, b) => (sum = a + b);

console.log(addition(2, 5));

/*

Question 43

Take 1 parameter and check if it is a multiple of 3

*/

const checkMultiple = (c) =>
  c % 3 === 0 ? "3'un katidir" : "3un kati degildir"; // aslinda burada 3e kalansiz bolunurmu diyor 3e kalansiz bolunen sey 3un katidir mantiken

console.log(checkMultiple(124523));

/*

Question 44

find the larger of two numbers

*/

const biggestNumber = (f, g) =>
  f < g ? `The Biggest Number is ${g}` : `The Biggest Number is ${f}`;

console.log(biggestNumber(234, 6745));
