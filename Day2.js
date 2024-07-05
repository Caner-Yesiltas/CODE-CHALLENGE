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

const studentscore = Number(prompt("Enter Student Score"));

if (studentscore >= 80 && studentscore <= 100) {
  console.log("Your Note Is A");
} else if (studentscore >= 70 && studentscore <= 89) {
  console.log("Your Note Is B");
} else if (studentscore >= 60 && studentscore <= 69) {
  console.log("Your Note Is C");
} else if (studentscore >= 50 && studentscore <= 59) {
  console.log("Your Note Is D");
} else if (studentscore >= 0 && studentscore <= 49) {
  console.log("Your Note Is F");
} else {
  console.log("Please Enter between 1-100 Number, you Put Wrong Number");
}

/*

Question 7

Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
*/

const season = prompt("Select a month with only first one is capital letter");

if (season === "September" || season === "October" || season === "November") {
  console.log("Your Season is Autumn");
} else if (
  season === "December" ||
  season === "January" ||
  season === "February"
) {
  console.log("Your Season is Winter");
} else if (season === "March" || season === "April" || season === "May") {
  console.log("Your Season is Spring");
} else if (season === "June" || season === "July" || season === "August") {
  console.log("Your Season is Summer");
} else {
  console.log(
    "Enter with small letters except First Letter month name, You did something wrong"
  );
}

/*

Question 8

 Check if a day is weekend day or a working day. Your script will take day as an input.

*/

const day = prompt("Enter a day");

if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday");
} else if (day === "saturday" || day === "sunday") {
  console.log("It's a weekend");
} else {
  console.log("Please Enter Just a day ");
}

/*

Question 9

How much would the shipping cost for a shipment 400 km away based on the following criteria?
0-500 km: 50 TL
501-999 km: 100 TL
1000+ km: 500 TL


*/

const distance = 400;

if (distance >= 0 && distance <= 500) {
  console.log("Cost will be 50 TL ");
} else if (distance >= 501 && distance <= 999) {
  console.log("Cost will be 100 TL ");
} else if (distance >= 1000) {
  console.log("Cost will be 500 TL ");
} else {
  console.log("Please enter a valid distance ");
}

/*

Question 10

1- Write an if-else structure that gives different messages depending on the user's age and membership status.
 If the user is over 18 and is a VIP member, print "Welcome, VIP Member".
 If the age is over 18 and a regular member, print "Welcome".
 If you are 18 or younger, print "You cannot log in".
const age = 20;
const isVIP = true;

*/

const age = 20;
const isVIP = true;

if (age > 18 && isVIP) {
  console.log("Welcome VIP");
} else if (age > 18 && !isVIP) {
  console.log("Welcome");
} else if (age <= 18) {
  console.log("You cannot log in");
} else {
  console.log("Please Enter valid age");
}

/*

Question 11

Write an if-else structure that gives clothing suggestions based on the weather.
If the weather is "sunny" print "Wear a T-shirt", if it is "rainy" print "Take an umbrella", if it is "snowy" print "Wear a coat".
For other situations, print "Check the weather."

const weather = "rainy"; // Test this value by varying it with different weather conditions.
const weather = "rainy";
*/

const weather = prompt(
  "Please Choose weather type and enter rainy/sunny/snowy"
);

if (weather == "sunny") {
  console.log("Wear a T-shirt");
} else if (weather == "rainy") {
  console.log("Take an umbrella");
} else if (weather == "snowy") {
  console.log("Wear a coat");
} else {
  console.log("Check the weather");
}
