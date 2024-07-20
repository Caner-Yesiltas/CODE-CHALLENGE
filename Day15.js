/*

Question 82  

//*-------------------------------------------------------

!Size bir  cümle verildi. "Clarusway" kelimesini bulmanız istendi. Ve eğer bulursanız şuna benzer bir cümle döndürmeniz gerekir: 

/? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

*/

function findClarusway(sentence) {
  const findWord = "Clarusway";

  const index = sentence
    .split(" ")
    .map((w, i) => (w === findWord ? i : -1))
    .find((num) => num !== -1); // map methodunda da kosul kullanilabilir

  return index !== undefined
    ? `I found at ${findWord} at ${index}`
    : `I can't find ${findWord}`;
}
console.log(findClarusway("I like Clarusway"));

/*

Bu dizi metotları (map, filter, reduce, vb.), her eleman için çağrılan callback fonksiyonuna aslında birden fazla argüman gönderebilir.
Genellikle bu argümanlar şu sırayla gelir:

İlk argüman: Dizinin o anki elemanı
İkinci argüman: O anki elemanın indeksi
Üçüncü argüman: İşlem yapılan dizinin kendisi


Ancak, siz bu argümanların hepsini kullanmak zorunda değilsiniz. Sadece ihtiyacınız olan argümanları alabilirsiniz.

*/

console.log(findClarusway("I like bootcamps "));

/*

Question 83  

Maaşı 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama 1 ay için ne kadar bütçe ayırmalı ?

let salaries=[18000,13000,17000,24000,18500,21000,19300]

let budget = ? 


Soru: Anonim fonksiyonların hepsi otomatik değer döndürdüğü için return kullanılmaz mı?
Hayır. Anonim fonksiyonlar her zaman otomatik değer döndürmez. return ifadesi, anonim fonksiyonlarda gerektiğinde kullanılabilir. Bu, fonksiyonun türüne ve yapısına bağlıdır.

Arrow fonksiyonlar (tek satırlık): return ifadesi gerekmez, çünkü tek satırlık ifadeler otomatik olarak döner.

javascript
Copy code
const exampleArrowFunction = (x) => x * 2; // Otomatik olarak x * 2 döner
Arrow fonksiyonlar (çok satırlık): {} blokları kullanıldığında return ifadesi gerekir.

javascript
Copy code
const exampleArrowFunction = (x) => {
  return x * 2; // 'return' kullanılması gerekir
};
Anonim fonksiyonlar (function anahtar kelimesiyle): Her zaman return ifadesine ihtiyaç duyar.

javascript
Copy code
const exampleFunction = function(x) {
  return x * 2; // 'return' kullanılması gerekir
};


*/

const maas = (arr) => {
  const bütce = arr
    .filter((x) => x < 20000)
    .map((x) => 20000 - x)
    .reduce((toplam, x) => toplam + x);

  return bütce;
};
console.log(maas([18000, 13000, 17000, 24000, 18500, 21000, 19300]));
