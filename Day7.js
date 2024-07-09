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

const factorial2 = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
};

console.log(factorial2(5)); // arrow function ile yapilandirilmasi second way !

/*

Question 46

 Fibonacci dizisi, her sayının kendisinden önce gelen iki sayının toplamı olduğu bir sayı dizisidir. Dizi genellikle 0 ve 1 ile başlar.

Fibonacci Dizisi Sorusu:
Soru: Fibonacci dizisinin n. elemanını bulan bir fonksiyon yazın. Fibonacci dizisi şu şekilde tanımlanır:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) (n > 1 için)

*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(5));
