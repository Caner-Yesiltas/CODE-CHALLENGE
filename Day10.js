/*

Question 60  

Write a function that gives whether the given number is odd or even




*/

function evenNumber(num) {
  if (num % 2 === 0) {
    console.log("Output: " + `${num}` + "is even");
  } else {
    console.log("Output: " + `${num}` + "is odd");
  }
}
evenNumber(3); // output : 3 is odd
evenNumber(2); // output : 2 is even

/*

Question 61  

5. Write a function that squares the given number





*/

function square(num) {
  let result = num ** 2;

  return result;
}
console.log(square(4)); // output: 16
console.log(square(5)); // output: 25

/*

Question 62  

Write a function that returns all elements of a string in order.
  Output :
H
e
l
l
o
W
o
r
l
d

*/

function iterateString(inputString) {
  for (leti = 0; i < inputString.length; i++) {
    console.log(inputString[i]);
  }
}
let str = "Hello World";
iterateString(str);

/*

Question 63  INTERVIEW QUESTION

Bir string içindeki tüm boşlukları '%20' ile değiştiren bir fonksiyon yazın.

*/

function replaceSpaces(str) {
  let splitstr = str.split(" "); // bosluk kelime kelime ayirir demek

  let result = splitstr.join("%20"); // joinin icine ne yazarsan kelimelerin arasina onlari koyar iki kelimenin arasina ve sadece dizilerde kullanilir.

  return result;
}

console.log(replaceSpaces("Hello World")); // "Hello%20World"
console.log(replaceSpaces("Front end developer")); // "Front%20end%20developer"

/*

Question 64  INTERVIEW QUESTION

Verilen bir sayı dizisindeki en büyük ve en küçük sayıyı bulup farkını döndüren bir fonksiyon yazın. 
(Diziler ve objeler konularına girmemek için string ve basit matematik kullanabilirsiniz.)

*/

function findDifference(numbers) {
  let numArray = number.split(" "); // stringi bosluk karakterine gore boler ve sonra her birini dizi haline getirir.

  numArray = numArray.map(Number); // Dizi deki elemanlari sayiya donusturur.

  let maxNum = math.max(...numArray);

  let minNum = math.min(...numArray);

  let difference = maxNum - minNum;

  return difference;
}

console.log(findDifference("1 2 3 4 5")); // 4 (5 - 1)
console.log(findDifference("10 20 30 40 50")); // 40 (50 - 10)
