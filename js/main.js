let toggle = document.querySelector(".nav__btn-1");
let menu = document.querySelector(".katalog");
let header = document.querySelector("header");
let isOpen = false;

toggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    menu.style.top = "50px";
    header.style.boxShadow = "none";
  } else {
    menu.style.top = "-350px";
    header.style.boxShadow = "0 0 5px 5px rgb(137, 137, 137)";
  }
});

const tabButtons = document.querySelectorAll(".shop__location button");
const tabContents = document.querySelectorAll(".shop__bottom__loc");

let active = 0;

function getTabContents() {
  tabContents.forEach((el, i) => {
    if (i == active) {
      el.style.display = "block";
      tabButtons[i].classList.add("active-tab");
    } else {
      el.style.display = "none";
      tabButtons[i].classList.remove("active-tab");
    }
  });
}

getTabContents();

tabButtons.forEach((el, i) => {
  el.addEventListener("click", function () {
    active = i;
    getTabContents();
  });
});