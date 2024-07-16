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

  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }

  return max;
}

// Test
console.log(findMax([1, 2, 3, 4, 5])); // 5

/*

Question 69 SHIFT!

Bir dizinin ilk elemanını kaldırarak, geri kalan elemanları içeren bir dizi döndüren bir fonksiyon yazın.


*/

function removeFirstParamaters(arr5) {
  arr5.shift();

  return arr5;
}

console.log(removeFirstParamaters([1,2,3,4]));



// arow functionla yapilisi 
const removeFirstParameters = (arr5) => {
    arr5.shift();
    return arr5;
  }
  
  console.log(removeFirstParameters([1, 2, 3, 4]));
  



/*

Question 70 POP!

Bir dizinin son elemanını kaldırarak, geri kalan elemanları içeren bir dizi döndüren bir fonksiyon yazın.


*/


function RemoveLastParameters(arr5) {

    arr5.pop();
    return arr5;
    
}

console.log(RemoveLastParameters([2,4,6,8,10,"x"]));


/*

Question 71 unshift!

Bir dizinin başına yeni bir eleman ekleyen bir fonksiyon yazın.


*/

function addNewParameters(arr5, element) { // element diye 2. bir parametre tanimlanir ve bu parametre unshifin icinde kullanilir eklenecek olan 

    arr5.unshift(element);
    return arr5;
}

console.log(addNewParameters([1,2,3,4,"Hey Man"],"What's Up Man"));


/*

Question 72 PUSH

Bir dizinin sonuna yeni bir eleman ekleyen bir fonksiyon yazın.


*/


function addNewParametersEnd(arr5, element) {

    arr5.push(element);
    return arr5;
    
}

console.log(addNewParametersEnd(["Solo Leveling", "Never Give Up"], "Arise!"));

/*

Question 73 SLICE

Bir dizinin belirli bir aralıktaki elemanlarını içeren yeni bir dizi döndüren bir fonksiyon yazın.


*/


function sliceArrays(arr5, start, end) {
    return arr5.slice(start, end);
    
}

console.log(sliceArrays(["x", "Y", "W",1,3,4,5,7,1,67], 1, 4));


/*

Question 73 SPLICE

Bir dizinin belirli bir aralıktaki elemanlarını kaldıran ve kaldırılan elemanları döndüren bir fonksiyon yazın.

*/


function spliceArray(arr5, start, deleteCount) {  //kestiklerimizin ciktisini aliyor sadece 
    return arr5.splice(start,deleteCount);
    
}

console.log(spliceArray([0,0,2,2,3,5,6]), 4,6 );

/*

Question 73 CONCAT

 İki veya daha fazla diziyi birleştirip yeni bir dizi döndüren bir fonksiyon yazın.

*/

function concatArrays(arr1, arr2) {
   return arr1.concat(arr2)
}


console.log(concatArrays([1,2],[3,3]));

/*

Question 74 INCLUDES

Bir dizinin belirli bir elemanı içerip içermediğini kontrol eden bir fonksiyon yazın.

*/

function includesElement(arr5, element) { //boolean deger dondurur

    return arr5.includes(element);
    
}

console.log(includesElement(["Istanbul", 444,"Bebekler",2,"Naruto" ],"Naruto"));


/*

Question 75  indexOf

Bir dizide belirli bir elemanın ilk indeksini bulan bir fonksiyon yazın. Eleman bulunamazsa -1 döndürsün.

*/

function indexOfElement(arr, element) {  // 2 kacinci indexde vardir diye sorar yani indexOf INDEX degerini verir kacinci index 
    return arr.indexOf(element)
    
}

console.log(indexOfElement([10,20,30,40,50], 2));


/*

Question 76  Reverse

Bir diziyi tersine çeviren bir fonksiyon yazın.

*/

function reverseString(arr5) {
    return arr5.reverse();
    
}

console.log(reverseString([100,200,300,400 ,"Lets Go"]));




