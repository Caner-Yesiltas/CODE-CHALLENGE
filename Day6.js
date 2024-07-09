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
  return arr.map(string);
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



*/


