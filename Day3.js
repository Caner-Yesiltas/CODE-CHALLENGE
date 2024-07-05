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

let index=1


for (let i=1; i<=5; i++) {
    console.log(i);
}

/*

Question 15

Write a for loop that prints even numbers from 0 to 10.

*/