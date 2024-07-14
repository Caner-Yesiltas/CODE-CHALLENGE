/*

Question 65  INTERVIEW QUESTION ASAL SAYI

Write a function that checks if a number is a prime number. A prime number is a number that is greater than 1 and has no divisors other than 1 and itself.

*/

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(21)); // false

/*

Question 66  INTERVIEW QUESTION  faktoriyel
 Kullanıcıdan bir sayı alarak bu sayının faktöriyelini hesaplayan bir JavaScript fonksiyonu yazın. 


*/

function Factorial(n) {
  if (n < 0) return undefined; // negatif sayilar icin faktoriyel tanimli degildir
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;

  return result;
}

console.log(Factorial(5));
