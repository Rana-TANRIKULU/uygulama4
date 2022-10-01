const btn = document.querySelector(".btn");
const marul = document.querySelector("#marul");
const domates = document.querySelector("#domates");
const sogan = document.querySelector("#sogan");
const display = document.querySelector(".display");

btn.addEventListener("click", () => {
  console.log("sipariş verildi canım");
  if (marul.checked) {
    console.log("marul alındı canım");
  } else {
    console.log("marul kalmadı canııııııım");
  }
  if (domates.checked) {
    console.log("domates alındı canım");
  } else {
    console.log("domates kalmadı canııııııım");
  }
  if (sogan.checked) {
    console.log("sogan alındı canım");
  } else {
    console.log("sogan kalmadı canııııııım");
  }
  display.textContent = "siparişiniz hazır";
});
