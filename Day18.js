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


name, username, email, phone ve address bilgileri ile yeni bir liste döndüren fonksiyonu yazalım:
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

const createStudentList = (student) => {
  const { name, username, email, phone, adress } = student;
  return {
    name,
    username,
    email,
    phone,
    adress,
  };
};

/*

Question 96


student objesinin school bilgilerini alarak yeni bir obje döndüren bir fonksiyon yazın. Bu fonksiyon schoolName, grade ve major bilgilerini içermelidir

*/

const newStudent2 = {
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

const school = (okul) => {
  const {
    school: { name: schoolname, grade: schoolgrade, major: schoolmajor },
  } = okul;
  return {
    schoolname,
    schoolgrade,
    schoolmajor,
  };
};

console.log(school(student));

/*

Question 97

employee objesinin email, phone ve address bilgilerini alarak yeni bir obje döndüren bir fonksiyon yazın. Bu fonksiyon email, phone, street, suite, city ve zipcode bilgilerini içermelidir.

*/

const employee = {
  id: 1,
  fullName: "Ali Veli",
  username: "aliveli123",
  email: "ali.veli@example.com",
  address: {
    street: "Meşe Sokak",
    suite: "No: 12",
    city: "Ankara",
    zipcode: "06000",
  },
  phone: "0500-000-0000",
  website: "aliveli.com",
  department: {
    name: "Bilgi İşlem",
    position: "Yazılım Geliştirici",
  },
  skills: ["JavaScript", "HTML", "CSS"],
};

const newEmployee = (isci) => {
  //arrow fonksiyonun degisken adi

  const {
    email,
    phone,
    adress: { street, suite, city, zipcode },
  } = isci; // arrow fonksiyonun degiskenin degeri
  return {
    email,
    phone,
    adress: {
      street,
      suite,
      city,
      zipcode,
    },
  };
};

const atanmisNewEmployee = newEmployee(employee);

/*

Question 98

employee objesinin tüm bilgilerini alarak, objenin tüm anahtarlarını ve değerlerini içeren yeni bir obje döndüren bir fonksiyon yazın.

*/

const getAllInfo = (isciler) => {
  const {
    email,
    phone,
    adress: { street, suite, city, zipcode },
  } = employee;

  return {
    email,
    phone,
    adress: {
      street,
      suite,
      city,
      zipcode,
    },
  };
};

const allInfo = getAllInfo(employee);

console.log(allInfo);

/*
Question 99

book objesinin title, author, publisher ve publishYear bilgilerini alarak yeni bir obje döndüren bir fonksiyon yazın. Bu fonksiyon title, author, publisherName ve publishYear bilgilerini içermelidir.
*/

const book = {
  id: 101,
  title: "Learn JavaScript",
  author: "John Doe",
  publisher: {
    name: "Tech Books Publishing Ltd.",
    address: "123 Tech Street",
    city: "Tech City",
    zipcode: "12345",
  },
  publishYear: 2020,
  genres: ["Programming", "Technology"],
};

const newBook = (kitap) => {
  const { title, author, publisher, publishYear } = book;

  return {
    title,
    author,
    publisher,
    publishYear,
  };
};

const bookInfo = newBook(book);
