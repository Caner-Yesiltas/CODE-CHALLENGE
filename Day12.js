/*

Question 67 interview QUESTION FIbonacci

Fibonacci Sequence Challenge


Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence. The Fibonacci sequence is defined as follows:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1

The function should take an integer n and return the nth Fibonacci number.

*/


function fibonacci(n) {
    if(n===0) return 0;
    if (n===1) return 1;


    let a=0, b=1;

    for (let i = 2; i<=n; i++) {
        let temp = a+b ;
        a=b;
        b = temp;

    }
     return b;
}