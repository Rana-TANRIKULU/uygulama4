const btn = document.querySelector(".btn");
const marul = document.querySelector("#marul");
const domates = document.querySelector("#domates");
const sogan = document.querySelector("#sogan");
const peynir = document.querySelector("#peynir");
const tursu = document.querySelector("#tursu");
const display = document.querySelector(".display");

btn.addEventListener("click", () => {
  display.textContent = "sipariş verildi canım";
  if (marul.checked) {
    setTimeout(() => {
      display.textContent = "marul alındı canım";
    }, 2000);
  } else {
    display.textContent = "marul kalmadı canııııııım";
  }
  if (domates.checked) {
    setTimeout(() => {
      display.textContent = "domates alındı canım";
    }, 3000);
  } else {
    display.textContent = "domates kalmadı canııııııım";
  }
  if (sogan.checked) {
    setTimeout(() => {
      display.textContent = "sogan alındı canım";
    }, 4000);
  } else {
    display.textContent = "sogan kalmadı canııııııım";
  }
  if (peynir.checked) {
    setTimeout(() => {
      display.textContent = "peynir alındı canım";
    }, 5000);
  } else {
    display.textContent = "peynir kalmadı canııııııım";
  }
  if (tursu.checked) {
    setTimeout(() => {
      display.textContent = "turşu alındı canım";
    }, 6000);
  } else {
    display.textContent = "turşu kalmadı canııııııım";
  }
  setTimeout(() => {
    display.textContent = "siparişiniz hazır";
  }, 7000);
});
//hepsi olsun çok açım butonu yap ÖDEV!!!!