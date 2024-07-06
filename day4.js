/*

Question 20

 Iterate 10 to 0 using for loop,


*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

for (let k = 10; k >= 0; k--) {
  console.log(countries[k]);
}

/*

Question 21

 Use for loop to iterate from 0 to 100 and print the sum of all numbers.


*/

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log("Total Sum:" + sum);

/*

Question 22

 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


*/

let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    //(i % 2 === 0)  we can find even numbers with that! sayiyi 2 ye bol kalanini ver kalan sifira esit ise eger donguyu calistir
    sumEvens += i; // i degerini dongu calisinca sumevensa ekle ama bir onceki degeriyle birlikte.
  } else {
    sumOdds += i;
  }
}

console.log("Sum of all evens: " + sumEvens); // dongu cok hizli tamamlandigindan aninda gorursun degeri dongulerin hepsi bitmeden konsola yazilmaz
console.log("Sum of all odds: " + sumOdds);

/*

Question 23

Write a while loop that prints numbers from 1 to 10.


*/

let i = 1;

while (i <= 10) {
  console.log(i);

  i++;
}

/*

Question 23

Write a while loop that prints even numbers from 0 to 50.


*/

let c = 0;

while (c <= 50) {
  if (i % 2 === 0) {
    // bu satirdaki if(i%2===0) ifadesi cift sayilar anlamina geliyor

    console.log(i);
  }

  i++;
}

/*

Question 24

How would you use a loop in JavaScript to keep prompting a user to enter the correct password until they get it right?

*/

let password = "";
while (password !== "1234") {
  password = prompt("Enter Right Password");
  if (password === null) {
    break;
  }
}

if (password === "1234") {
  console.log("Right Password!");
} else {
  console.log("Acces Denied");
}

/*





Question 25


Here are some loop questions, listed from easy to difficult, that will help you reach the algorithmic level required to get a job ******$$$$$$$$

those questions generated from ai, it can be the same before I make this. So here we go 

Print numbers from 1 to 10:

Requirement: Use for loop
Task: Write a script that prints the numbers from 1 to 10.

*/

for (let z = 1; z <= 10; i++) {
  console.log(z);
}

/*



Question 26

Sum of numbers from 1 to 10:

Requirement: Use while loop
Task: Write a script that calculates the sum of numbers from 1 to 10



*/

let sum = 0;
let i = 1;

while (let <= 10) {
  sum += i;

  i++;
}

console.log(sum);

/*


Question 27

Print even numbers between 1 and 20:

Requirement: Use for loop
Task: Write a script that prints all even numbers between 1 and 20


*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*


Question 28

Generate an array of 5 random numbers:

Requirement: Use while loop
Task: Write a script that generates an array of 5 random numbers between 0 and 100


*/

let randomNumbers = []; // random derlerse degisken bos birakilir her zaman zaten while dongusunun farkida budur sayac bos kalir

let i = 0;

while (i < 5) {
  // random 5 sayisi dersek her zaman kosul 5den kucuk olmalidir

  let randomNumber = Math.floor(Math.random() * 101); // math.floor fonksiyonu random sayi uretir ama bu sayi 0 ile 1 arasindadir bunu 101 ile carpariz 0 ile 100 arasinda uretmesi icin  \\ math floor ise uretilen sayinin yuvarlanarak tam sayi olmasini saglar
  randomNumbers[i] = randomNumber; // i 1 ilen yani 1. sefer sayac dondugunde atanan random numaradir randomnumuber i2 iken 2. sefer sayac calisir 2. sefer 2. atanan numaradir kisaca i atanan no ve sayac sayisidir dizinin icerisinde ki
  i++;
}

console.log(randomNumbers);

/*


Question 29 %20

Find the factorial of a number:

Requirement: Use for loop
Task: Write a script that calculates the factorial of a given number


*/

let factorial = 1;

for (s = 1; s <= 5; s++) {
  // s neden 1 cunku faktoriyel hesaplanmasi icin 1den baslanir 0 verilirse 0 ile carpilir sonuc 0 olur
  factorial *= s;
}

console.log(factorial);

// bu koda ek olarak sum yani topla degerini ikisi bir arada gormek istedim bunun sebebi yukarida factorial her bir sayida turda olan deger toplam deger degil ama
// *= ifadesi oldugu icin carp topla diye kafa karisikligi olusabiliyor simdi ayni ogreni toplam ile birlikte assagiya yazacagim ##!!!

let factorial = 1;
let sum = 0;

for (let s = 1; s <= 5; s++) {
  factorial *= s;
  sum += factorial; // burada almis oldugumuz factoriel degerini her bir atamayi kendi ile toplayip toplama veriyoruz.
}

console.log("Factorial of 5:", factorial);
console.log("Sum of factorials:", sum);

/*


Question 30 %25

Reverse a string:

Requirement: Use while loop
Task: Write a script that reverses a given string.


*/

let str = "hello"; // en basta string bir degisken tanimlayarak tersden yazdirmamiz gereken string veriyi yaziyoruz

let reversedStr = ""; // sonra tersten yazdiracagimiz hello yazisini saklayacak baska bir degisken tanimliyoruz ve icine saklamak icin bos birakiyoruz

let i = str.length - 1; // sondan basa yazabilmemiz icin str.length string hellonun 5 karakter uzunlugunda oldugunu gosterir birde -1 diyerek 1 cikartiriz index
// ile ilgili bir seymis fakat o konuya daha gelmedigim icin simdlik tersten string karakteri yazdirmak icin karakter sayisi -1 demem yeterli

while (i >= 0) {
  // dongu 4 - 3 - 2- 1- 0 oldugu icin sondan itibaren o yuzden bu degeri verdik

  reversedStr += str[i]; // str 4 de 0 str 3 de l stre 2 de l str1 de e str 0 dada h yazilir ve her bir deger toplanarak yeni olusturdugumuz reversedstr degiskenine atanir
  i--;
}
console.log(reversedStr);

/*


Question 31 %30

Find the largest number in an array:

Requirement: Use for loop
Task: Write a script that finds the largest number in a given array.

*/

let numbers = [3, 5, 7, 2, 8]; // sana en buyuk numaralari bul diyorsa kafana gore array yap yani kendin ata
let largest = numbers[0]; // baslangic noktasini 0 yapmisiz dizide ki en buyuk elemani bulmak icin neden anlamadim

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    //  let largest = numbers[0];  burasi ile releative numbers i degisirken largestda degisiyor bir suru deger bakiyor en buyuk olan degeri seciyor sonra da bu degeri largest degiskenine atiyor
    largest = numbers[i];
  }
}
console.log(largest);

/* interviwe sorulari bitmistir


Question 32 

Print Numbers from 1 to 5
Task: Write a script that prints numbers from 1 to 5 using a do-while loop.

*/

let i = 1;

do {
  console.log(i); // tek fark while sona geliyor kosul sonunda olusacak sonuc basa geliyor
  i++;
} while (l <= 5);

/* interviwe sorulari bitmistir


Question 33 

Sum of Numbers from 1 to 10
Task: Write a script that calculates the sum of numbers from 1 to 10 using a do-while loop.

*/

let i = 1;
let sum = 0;

do {
  console.log(i);
  sum += i;

  i++;
} while (i <= 10);

console.log(sum);

/* interviwe sorulari bitmistir


Question 33 

Print Even Numbers from 2 to 10
Task: Write a script that prints even numbers from 2 to 10 using a do-while loop.


*/

let i = 2;

do {
  console.log(i);

  i += 2;
} while (i <= 10);

// this is second way to make it solve this problem with using if

let num = 2;
do {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
} while (num <= 10);
