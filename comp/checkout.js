function PAID() {
  document.getElementById("paymen").style.display = "flex";

  setTimeout(function () {
    document.getElementById("wait").style.display = "none";
  }, 2000);
  setTimeout(function () {
    localStorage.setItem("ADDRES", JSON.stringify([]));
    localStorage.setItem("PR", JSON.stringify([]));
    localStorage.setItem("TEMP", JSON.stringify([]));
    localStorage.setItem("CATO", JSON.stringify([]));
    localStorage.setItem("CART", JSON.stringify([]));
    window.open("Index.html")
  }, 2000);
  setTimeout(function () {
    window.open("myaccount.html");
  }, 6000);
}

if (localStorage.getItem("CART") === null) {
  localStorage.setItem("CART", JSON.stringify([]));
}

var A = document.getElementById("BRT");
var B = document.getElementById("EMP");
var C = localStorage.getItem("CART");
C = JSON.parse(C);
console.log(C);
var XX = C.reduce(function (accumulator, currentValue) {
  return accumulator + Number(currentValue.price);
}, 0);
console.log(XX);
var AA = document.getElementById("AA");
var Rand = Math.ceil(Math.random() * 1000);
var yy = Rand + XX;
AA.innerHTML = "Rs. " + yy;
var AB = document.getElementById("AB");
AB.innerHTML = "Rs. " + Rand;
var zz = 0;
var AC = document.getElementById("AC");
if (XX > 599) {
  zz = 0;
} else {
  zz = Math.ceil(Math.random() * 100);
  AC.innerHTML = "Rs. " + zz;
}
var AD = document.getElementById("AD");
AD.innerHTML = "Rs. " + JSON.parse(localStorage.getItem("PR"));
