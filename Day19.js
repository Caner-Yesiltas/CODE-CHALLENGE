/*
Question 100

Bir HTML dosyasında bir <div id="header"> elementi olduğunu varsayalım. Bu elementi JavaScript kullanarak bulun ve konsola yazdırın.
Bir <p id="intro"> elementi olduğunu varsayalım. Bu elementin arka plan rengini sarıya değiştirin.
Bir <span id="highlight"> elementi olduğunu varsayalım. Bu elementin metin içeriğini "Highlighted Text" olarak değiştirin.
Bir HTML dosyasında bir sınıfa sahip ilk <p> elementini bulun ve rengini kırmızıya değiştirin.
*/

let headerDiv = document.getElementById("header");
let introP = document.getElementById("intro");

let spanHightLight = document.getElementById("highlight");
spanHightLight.textContent = "Highlighted Text";

introP.style.backgroundColor = "yellow";

let firstP = document.querySelector("p.akagame");
firstP.style.color = "red";

let secondP = document.querySelectorAll("p.akagame")[1];

secondP.style.color = "blue";

/*
Question 101

Bir <button class="btn"> elementini bulun ve bu butona tıklandığında bir uyarı gösteren bir olay dinleyicisi ekleyin.
Soru 3: Bir <div class="container"> elementini bulun ve bu elementin HTML içeriğini <p>New content inside container</p> olarak değiştirin.
Aynı sınıfa sahip tüm <li> elementlerini bulun ve her birinin metin içeriğini "Updated" olarak değiştirin.
Bir sınıfa sahip tüm <div> elementlerinin arka plan rengini maviye değiştirin.

*/

let button = document.querySelector(".btn");

button.addEventListener("click", function () {
  alert("Button clicked!");
});

let containerDiv = document.querySelector(".container");
containerDiv.innerHTML = "<p>New content inside container</p>";

let listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
  item.textContent = "updated";
});

let divAllBackgrounds = document.querySelectorAll("div");

divAllBackgrounds.forEach((div) => {
  div.style.backgroundColor = "blue";
});


