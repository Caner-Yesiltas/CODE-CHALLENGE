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

Question 2

JS-CC-02 : Check Palindrome
Purpose of the this coding challenge is to write a code that checks whether a string is palindromic or not.

What is palindrome?

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, and the sentence: "A man, a plan, a canal – Panama".

Learning Outcomes
At the end of the this coding challenge, students will be able to;

analyze a problem, identify and apply programming knowledge for appropriate solution.

demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

Problem Statement
Take an input from user.

Check that input whether it is palindromic or not:

if palindromic then console log that it is palindromic

if not palindromic then console log that it is not palindromic

⌛ Happy Coding ✍

*/

function checkPalindrome(str) {

    let reverseStr2=""

    reverseStr2=str.split('').reverse().join('');

    if(reverseStr2=== str) {
        console.log("it is palindromic");
    } else {
        console.log("It is not palindromic");
    }
    
    return reverseStr2; // degeri geri dondurur eger bos birakirsak returnsiz undefined der
}

console.log(checkPalindrome("SAS"));



function checkPalindromeWithFor(str) {

const len = str.length; // str.length tekrar yazmamak icin leb diye bir degisken atanmistir

for(   )
    
}