/*

Question 67 

Verilen bir sayılar dizisinin tüm elemanlarının toplamını hesaplayan bir fonksiyon yazın.

*/

function arraySum(arr) {
  let sum = 0; //Once sumi tanimla

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // arr[i] += 1;  Her bir elemanı 1 artırıyoruz sadece elemanlari arttir ve ekle deseydi diziye topla demeseydi
  }
  return sum;
}

console.log(arraySum([2, 5, 6, 7, 8]));

/*

Question 68

Verilen bir sayılar dizisindeki en büyük elemanı bulan bir fonksiyon yazın.


*/

function findMax(arr2) {
  let max = arr2[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }

  return max;
}

// Test
console.log(findMax([1, 2, 3, 4, 5])); // 5
