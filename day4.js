/*

Question 20

 Iterate 10 to 0 using for loop,


*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

for (let k = 10; k >= 0; k--) {
  console.log(countries[k]);
}

/*

Question 21

 Use for loop to iterate from 0 to 100 and print the sum of all numbers.


*/

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log("Total Sum:" + sum);

/*

Question 22

 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


*/

let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    //(i % 2 === 0)  we can find even numbers with that! sayiyi 2 ye bol kalanini ver kalan sifira esit ise eger donguyu calistir
    sumEvens += i; // i degerini dongu calisinca sumevensa ekle ama bir onceki degeriyle birlikte.
  } else {
    sumOdds += i;
  }
}

console.log("Sum of all evens: " + sumEvens); // dongu cok hizli tamamlandigindan aninda gorursun degeri dongulerin hepsi bitmeden konsola yazilmaz
console.log("Sum of all odds: " + sumOdds);

/*

Question 23

Write a while loop that prints numbers from 1 to 10.


*/

let i = 1;

while (i <= 10) {
  console.log(i);

  i++;
}

/*

Question 23

Write a while loop that prints even numbers from 0 to 50.


*/

let c = 0;

while (c <= 50) {
  if (i % 2 === 0) {
    // bu satirdaki if(i%2===0) ifadesi cift sayilar anlamina geliyor

    console.log(i);
  }

  i++;
}

/*

Question 24

How would you use a loop in JavaScript to keep prompting a user to enter the correct password until they get it right?

*/


let password = "";
while (password !== "1234") {
    password = prompt("Enter Right Password");
    if (password === null) {
        break; 
    }
}

if (password === "1234") {
    console.log("Right Password!");
} else {
    console.log("Acces Denied");
}

/*





Question 25


Here are some loop questions, listed from easy to difficult, that will help you reach the algorithmic level required to get a job ******$$$$$$$$

those questions generated from ai, it can be the same before I make this. So here we go 

Print numbers from 1 to 10:

Requirement: Use for loop
Task: Write a script that prints the numbers from 1 to 10.

*/

for(let z=1 ; z<=10; i++ ) {
    console.log(z);
}



/*



Question 25

Sum of numbers from 1 to 10:

Requirement: Use while loop
Task: Write a script that calculates the sum of numbers from 1 to 10



*/

let sum=0;
let i=1;

while (let<=10) {

    sum+= i;

    i++;
    
}

console.log(sum);


/*


Question 26

Print even numbers between 1 and 20:

Requirement: Use for loop
Task: Write a script that prints all even numbers between 1 and 20


*/

for (let i=1 ; i<=20 ; i++ )
    { if(i%2===0) {console.log(i);}

    }

    /*


Question 26

Generate an array of 5 random numbers:

Requirement: Use while loop
Task: Write a script that generates an array of 5 random numbers between 0 and 100


*/