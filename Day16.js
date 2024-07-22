/*

Question 84 SPREAD OPERATORU

Aşağıdaki iki diziyi birleştirip yeni bir dizi oluşturun:

*/

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
// Yeni dizi: ['apple', 'banana', 'carrot', 'broccoli']

const newArrays=[...fruits,...vegetables];
console.log(newArrays);

/*

Question 85 

Bir objeyi kopyalayıp yeni bir anahtar-değer çifti ekleyin:

*/

const person = { name: 'John', age: 25 };
// Yeni obje: { name: 'John', age: 25, city: 'New York' }

const newArray2 ={...person, city:'New York'};
console.log(newArray2);


/*

Question 87

Aşağıdaki diziden ilk iki elemanı çıkarın ve first ve second değişkenlerine atayın:

*/

const colors = ['red', 'green', 'blue'];
// first: 'red', second: 'green'


const [first, second] =colors;

console.log(first);
console.log(second);



/*

Question 88

Aşağıdaki objeden age ve city anahtarlarını çıkarıp geri kalan objeyi newPerson olarak adlandırın:

*/

const person2 = { name: 'Emma', age: 28, city: 'Boston' };

const {age,city, ...newPerson} = person2 
console.log(newPerson);


/*

Question 89

Aşağıdaki objenin name anahtarının değerini 'Michael' olarak güncelleyin:

*/

const student = { name: 'James', grade: 'A', subject: 'Math' };


student.name = "Michael";

console.log(student);


/*

Question 89

 Bir öğrenci nesnesi (object) oluşturun ve bu nesnenin ad, soyad, yas, ve sinif gibi özellikleri olsun.
  Daha sonra, bu öğrencinin sinif özelliğini silin ve sonucu konsola yazdırın.

*/

const ogrenci = {
    ad: 'Ali',
    soyad: 'Veli',
    yas: 20,
    sinif: '12A'
  };
  
 
delete ogrenci.sinif;

console.log(ogrenci);

