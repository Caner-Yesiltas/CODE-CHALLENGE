/*
Question 102

Bir web sayfasında bir liste (ul) oluştur ve bu listeye üç farklı list item (li) ekle. Her bir list item'ın içeriği "Öğe 1", "Öğe 2" ve "Öğe 3" olmalıdır.
*/

const ul = document.createElement("ul");

const items = ["oge1", "oge2", "oge3"];

items.forEach((itemText) => {
  const li = document.createElement("li");

  li.texContent = itemText;
  ul.appendChild(li);
});

const container = document.getElementById("container");

container.appendChild(ul);

/*
Question 102

Bir web sayfasında ID'si "silinecek" olan bir paragraf (p) elementi var. Bu paragrafı sayfadan silmek için gerekli JavaScript kodunu yaz.
#container içindeki <p id="old-paragraph"> elementini <p id="new-paragraph">This is the new paragraph.</p> elementi ile değiştirin.

*/

const silenecek = document.getElementById("silinecek");

silinecek.remove(silenecek);

const oldparagraph = document.getElementById("old-paragraph");

const newParagraph = document.createElement("p");

newParagraph.id = "new-paragraph";
newParagraph.textContent = "this is the new paragraph";

const container2 = document.getElementById("container");
container.replaceChild(newParagraph, oldParagraph);
