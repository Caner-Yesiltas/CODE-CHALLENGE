/*

Question 93

Not Ortalamalarini bulup yeni bir listede donduren fonksiyonu yaziniz.

*/

const ogrenciNotlariList = [
  { name: "Mustafa", notes: [70, 90, 60] },
  { name: "Rabia", notes: [50, 70, 60] },
  { name: "Hüseyin", notes: [40, 20, 30] },
  { name: "Ahmet", notes: [80, 90, 100] },
  { name: "İbrahim", notes: [30, 40, 55] },
  { name: "Tuba", notes: [90, 100, 100] },
];

const ortNot = ogrenciNotlariList.map(({ name, notes }) => {
  return {
    name: name,
    ortalama: (notes.reduce((sum, num) => sum + num, 0) / notes.length).toFixed(
      1
    ),
  };
});

console.log(ortNot);

/*

Question 94

Bir çalışan listesindeki maaşları kullanarak her çalışanın yıllık maaşını hesaplayan ve yeni bir liste döndüren bir fonksiyon yazınız. 

*/

const calisanListesi = [
  { name: "Ali", salary: 3000 },
  { name: "Ayşe", salary: 3500 },
  { name: "Mehmet", salary: 4000 },
  { name: "Fatma", salary: 4500 },
  { name: "Ahmet", salary: 5000 },
];

const yillikmaas = calisanListesi.map(({ name, salary }) => {
  return {
    name: name,
    YillikMaas: salary * 12,
  };
});

/*

Question 95


Elbette, verilen açıklamaya göre name, username, email, phone ve address bilgileri ile yeni bir liste döndüren fonksiyonu yazalım:
*/

const newStudent = {
  id: 2,
  name: "Hüseyin",
  username: "huseyin321",
  email: "huseyin@example.com",
  address: {
    street: "Papatya Caddesi",
    suite: "Daire: 5",
    city: "İstanbul",
    zipcode: "34000",
  },
  phone: "0555-555-5556",
  website: "huseyin.org",
  school: {
    name: "İstanbul Teknik Üniversitesi",
    grade: "B",
    major: "Yazılım Mühendisliği",
  },
  languages: ["C#", "Python", "Ruby"],
};
