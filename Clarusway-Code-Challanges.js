/*

Question 1

JS-CC-01 : Reverse String
Purpose of the this coding challenge is to write a code that given a string , returns reverse of it.

Learning Outcomes
At the end of the this coding challenge, students will be able to;

analyze a problem, identify and apply programming knowledge for appropriate solution.

demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

Problem Statement
Write a code that takes a string and reverses the letters in place.

Examples:

reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

reverse("Happy") ➞ yppaH

⌛ Happy Coding ✍

*/



function reverseString(str) {

    reverseStr=""

    reverseStr=str.split('').reverse().join('');

    return reverseStr

    
}

console.log(reverseString("Uber"));


//2 . yol for dongusu ile yapilisi


function reverseStringWithFor(str) {

    let reverseStr2=""

    for(let i= str.length-1; i>=0; i--){

        reverseStr2+= str[i];  // karakterleri tekrar isledigimiz icin [] array parantezi kullandik
    }
    
    return reverseStr2;
}

console.log(reverseStringWithFor("Uber"));


/*

Question 1



*/