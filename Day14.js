/*

Question 77  ARROW FUNCTION

Bir fonksiyon yaz ki verilen bir sayıyı ikiyle çarpsın. 
*/

const multiplyByTwo = (num) => num * 2;

/*

Question 78  ARROW FUNCTION

Bir dizideki her elemanın karesini alan bir fonksiyon yaz.


*/

const squareArray = (arr) => arr.map((num) => num * num);

console.log(squareArray([1, 2, 3, 4]));

/*

Question 79  ARROW FUNCTION for each

Soru: Bir dizideki her öğeyi iki katına çıkarmak için forEach fonksiyonunu kullanarak bir arrow function yazın.

*/

const doubleNumbers = (arr) => {
  let doubleNumbers2 = [];

  arr.forEach((element) => {
    doubleNumbers2.push(element * 2); // push kullanilir yeni dize olusturmak istiyorsan cunku degeri donusturup yeniden yazmak for each metodu
  });

  return doubleNumbers2;
};

console.log(doubleNumbers([2, 5, 10]));

/*

Question 80  ARROW FUNCTION -- FILTER METODU

Soru: Bir dizideki yalnızca çift sayıları almak için filter fonksiyonunu kullanarak bir arrow function yazın.

*/

const evenNumbers = (arr) => arr.filter((element) => element % 2 === 0); // SUSLU PARANTEZ YOKSA VE TEK SATIRSA RETURN KULLANILMAZ!

console.log(evenNumbers([2, 5, 123, 45, 2]));

/*

Question 81  ARROW FUNCTION -- Reduce

Bir dizideki sayıların toplamını hesaplamak için reduce fonksiyonunu kullanarak bir arrow function yazın.

*/

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

const numbers = [1, 2, 3, 4, 5];
