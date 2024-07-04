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
