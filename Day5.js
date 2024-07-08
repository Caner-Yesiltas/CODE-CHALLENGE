/*

Question 34 
Write a function named greet that takes a single parameter name and prints "Hello, name!".


*/


function greet(name){

    console.log("Hello" + name + "!");
}

greet("Alice");


/*
Question 35
Write a function named add that takes two parameters, a and b, and returns their sum.


*/

function add(a,b) {
    sum=a+b;
    
    return sum;
}

 console.log(add(4,5));  


 /*
Question 36

Write a function named square that takes a single parameter num and returns its square.

*/

function square(num) {
   result=num**2;

   return result;
}

 console.log(square(5));  


 /*
Question 37

Write a function named sayGoodbye that takes a single parameter name and prints "Goodbye, name!".

*/


function sayGoodbye(name) {
    console.log(`Goodbye ${name}!`); // literal template kavramini esma6 ile birlikte kullanmaya basladik
    
}

console.log(sayGoodbye("Old Friend o_o "));  





function sayGoodbye(name) {
    console.log("Goodbye, " + name + "!");
}


sayGoodbye("Bob"); // second way 




 /*
Question 38



*/
