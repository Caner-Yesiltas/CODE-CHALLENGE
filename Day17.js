/*

Question 90

Aşağıdaki employees listesini kullanarak her bir çalışanın belirli bilgilerini belirli bir formata dönüştürmeniz isteniyor:

Her çalışanın bilgilerini şu şekilde düzenlemeniz gerekiyor:

fullName: Çalışanın adı ve soyadı büyük harflerle yazılacak.
email: Çalışanın e-posta adresi.
location: Şehir ve ülke bilgisi belirli bir formatta birleştirilecek (örneğin, "İstanbul, Türkiye").
firstLanguage: Çalışanın bildiği dillerin ilk elemanı.

*/

const employees = [
  {
    firstName: "Ali",
    lastName: "Veli",
    email: "ali.veli@example.com",
    address: {
      city: "İstanbul",
      country: "Türkiye",
    },
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    firstName: "Ayşe",
    lastName: "Fatma",
    email: "ayse.fatma@example.com",
    address: {
      city: "Ankara",
      country: "Türkiye",
    },
    languages: ["C#", "Python", "Ruby"],
  },
  {
    firstName: "Mehmet",
    lastName: "Can",
    email: "mehmet.can@example.com",
    address: {
      city: "İzmir",
      country: "Türkiye",
    },
    languages: ["JavaScript", "C++", "PHP"],
  },
];

const istedigimizliste = employees.map(
  ({ firstName, lastName, email, location, languages }) => {
    return {
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      fullname: `${firstName}``${lastName}`,
      email: email,
      location: `${city}, ${country}`,
      firstlanguage: languages[0],
    };
  }
);

console.log(istedigimizliste);

/*

Question 91

Aşağıdaki products listesini kullanarak her bir ürünün belirli bilgilerini belirli bir formata dönüştürmeniz isteniyor:

Her ürünün bilgilerini şu şekilde düzenlemeniz gerekiyor:

productName: Ürünün adı büyük harflerle yazılacak.
priceWithCurrency: Fiyat, para birimiyle birlikte yazılacak (örneğin, "100 USD").
available: Eğer stokta varsa "Yes", yoksa "No" olarak yazılacak.
categories: Kategorilerin ilk elemanı.

*/

const products = [
  {
    name: "Laptop",
    price: 1000,
    currency: "USD",
    inStock: true,
    categories: ["Electronics", "Computers"],
  },
  {
    name: "Smartphone",
    price: 700,
    currency: "USD",
    inStock: false,
    categories: ["Electronics", "Mobile Devices"],
  },
  {
    name: "Chair",
    price: 150,
    currency: "USD",
    inStock: true,
    categories: ["Furniture", "Office"],
  },
];

const newProduct = products.map(
  ({ name, price, currency, inStock, categories }) => {
    return {
      productName: name.toUpperCase(),
      priceWithCurrency: `${price}  ${currency}`,
      available: inStock ? "Yes" : "No",
      categories: categories[0],
    };
  }
);

/*

Question 92

Aşağıdaki students listesini kullanarak her bir öğrencinin belirli bilgilerini belirli bir formata dönüştürmeniz isteniyor:

Her öğrencinin bilgilerini şu şekilde düzenlemeniz gerekiyor:

fullName: Öğrencinin tam adı (ad ve soyadı birleştirilecek).
grade: Öğrencinin notu.
major: Öğrencinin ana dalı büyük harflerle yazılacak.
firstLanguage: Öğrencinin bildiği dillerin ilk elemanı.

*/

const students = [
  {
    firstName: "Ahmet",
    lastName: "Yılmaz",
    grade: "A",
    major: "Computer Science",
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    firstName: "Ayşe",
    lastName: "Demir",
    grade: "B",
    major: "Software Engineering",
    languages: ["C#", "Python", "Ruby"],
  },
  {
    firstName: "Mehmet",
    lastName: "Kara",
    grade: "A",
    major: "Information Technology",
    languages: ["JavaScript", "C++", "PHP"],
  },
];

const newStudents = students.map(
  ({ firstName, lastName, grade, major, languages }) => {
    return {
      fullName: `${firstName} ${lastName}`,
      grade: grade,
      major: major.toUpperCase(),
      firstLanguage: languages[0],
    };
  }
);

console.log(newStudents);
