 /*


Soru 1
Bir mağazada bir ürünün fiyatı 20 TL. Eğer müşterinin kartında 30 TL veya daha fazla para varsa bu ürünü alabilir, aksi halde alamaz.

Kartında 35 TL olan müşteri ürünü alabilir mi?

Question 1
The price of a product in a store is 20 TL. If the customer has 30 TL or more on his card, he can buy this product, otherwise he cannot buy it.

Can a customer with 35 TL on his card buy the product?

 */


      var product = 20;

      var customercardlimit = Number(
        prompt("Please Enter Customer Card Limit")
      );

      if (customercardlimit >= 30) {
        console.log("You Can Buy This Product");
      } else {
        alert(
          `its not enough Limit, You can't buy it. Your Card Limit is ${customercardlimit} `
        );
      }


      /*
  QUESTION 2

  A child is allowed to enter the park depending on his age. If the child is under 12 years old or is exactly 12 years old, he can enter the park.

Can a 10 year old child enter the park?



Bir çocuğun yaşına göre parka girmesine izin veriliyor. Eğer çocuk 12 yaşından küçükse veya tam 12 yaşında ise parka girebilir.

10 yaşında olan çocuk parka girebilir mi?

*/

alert("if your child age 12 or less than 12 Your child can enter the park");



 const childage= Number(prompt("Please Enter Your Child Age"));

 if (isNaN(childage) || childage ==="" ) {   console.log("You write something wrong, please Enter Just Number");    // isNanN ask is this number or not If says its not a number turn to TRUE! 
  
 } else {
 if (childage <=12 ) { console.log("YourChild Can Enter This Park");
  

 } else { console.log("Your Child Can't Enter This Park, Because Age limits");
  
 } 
  
 }



/*

QUESTION 3

/ SORU 1: Elektrik sinyali geliyor yada gelmiyor bu duruma göre lamba yanar, lamba yanmaz yazan kod bloğunu oluşturun
 sinyal bilgisini kullanıcıdan alıyoruz
  
/ QUESTION 1: Create a code block that says the lamp will turn on or not, depending on whether the electrical signal is coming or not.
 We receive signal information from the user


*/

const electricalsignal=prompt("Signal is coming or not Say YES\NO");

if (electricalsignal==="YES") {console.log("Lamp Will turn on");}
    
 else {console.log("Lamp Will turn off");
    
}

/*

QUESTION 4
 Program that writes the message that people over the age of 18 can vote, otherwise it writes the message that they cannot votewith TERNARY!
*/

let yas =15

const message = yas< 18 ? console.log("You Can't Vote") : console.log("You can vote");



