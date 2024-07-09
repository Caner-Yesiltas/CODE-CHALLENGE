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

/*

Question 46



*/
