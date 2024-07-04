/*

Question 5

Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


*/

function isEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(4)); //true
console.log(isEven(7)); //FALSE


/*

Question 6

Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F

*/

const studentscore=Number(prompt("Enter Student Score"));

if (studentscore>= 80 || studentscore <=100) { console.log("Your Note Is A");}




else {
    
}

