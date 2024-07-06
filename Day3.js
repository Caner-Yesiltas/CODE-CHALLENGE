/*

Question 12

Write an if-else structure that controls login based on username and password.

If the username is "admin" and the password is "1234", print "Login successful", otherwise print "Login failed".

const username = "admin"; // Test this value by changing it to different usernames.
const password = 1234; // Test this value by changing it to different passwords.
*/

const username = prompt("Enter user name");
const password = Number(prompt("Enter the password"));

username === "admin" && password === 1234
  ? console.log("Login Succesful")
  : console.log("Login Failed");

/*

Question 12

6- Write an if-else structure that calculates the discounted price based on a product price and discount code.
 If the discount code is "DISCOUNT10", apply 10% discount, if "DISCOUNT20", apply 20% discount, if "DISCOUNT30", apply 30% discount.

If the discount code is invalid, print "Invalid discount code".
let discountCode = "DISCOUNT20";

*/

let price = Number(prompt("Enter A Price"));
let discountCode = prompt("Enter A Discount Code");

if (discountCode === "DISCOUNT10") {
  price = price - price * 0.1;
  console.log(`Apply 10% discount new price: ${price}`);
} else if (discountCode === "DISCOUNT20") {
  price = price - price * 0.2;
  console.log(`Apply 20% discount new price: ${price}`);
} else if (discountCode === "DISCOUNT30") {
  price = price - price * 0.3;
  console.log(`Apply 30% discount new price: ${price}`);
} else {
  console.log("Invalid Discount Code");
}

/*

Question 13

Write a ternary expression that calculates a bonus based on an employee's performance score.
If the performance score is 90 and above, the bonus is 20%, between 80-89, 10%, between 70-79, 5%, and below 70, there is no bonus.
Let the employee's salary be 1000 units.

let performanceScore = 85; // Test by changing this value.
const salary = 1000;

*/

let performanceScore = Number(
  prompt("Enter Your Performance Score between 0-100")
);
const salary = 1000;

let bonus =
  performanceScore >= 90
    ? salary * 0.2
    : performanceScore >= 80 && performanceScore <= 89
    ? salary * 0.1
    : performanceScore >= 70 && performanceScore <= 79
    ? salary * 0.5
    : 0;

console.log(`The bonus based on the performance score is: ${bonus}`);

/*

Question 14

Write a for loop that prints numbers from 1 to 5.

*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/*

Question 15

Write a for loop that prints even numbers from 0 to 10.

*/

for (let a = 0; a <= 10; a += 2) {
  console.log(a);
}

/*

Question 16

Write a for loop that prints numbers from 10 to 1 in reverse order.


*/

for (let c = 10; c >= 1; c--);
{
  console.log(c);
}

/*

Question 16

Write a for loop that calculates the sum of numbers from 1 to 10.


*/

let sum = 0;

for (let d = 1; d <= 10; d++) {
  sum += d;
}

console.log("Total" + sum);

/*

Question 17

Write a for loop that prints the odd numbers from 1 to 20.


*/

for (let g = 1; g <= 20; g += 2) {
  console.log(g);
}

/*

Question 18

Write a for loop that calculates the factorial of numbers from 1 to 10


*/

let Factorial = 1;

for (let h = 1; h <= 10; h++) Factorial *= h;

{
}

/*

Question 19

Write a for loop that prints the numbers from 1 to 100 that are divisible by 5.


*/

for (let j = 1; j <= 100; j++) {
  if (j % 5 === 0) {
    console.log(j);
  }
}
