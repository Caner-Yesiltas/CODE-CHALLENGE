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

Question 63  


*/
