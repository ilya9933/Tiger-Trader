const btnLang = document.querySelector(".language__input");
const dropdoun = document.querySelector(".language__select");

let language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage) : "ru";
language = language.slice(0, 2).toUpperCase();

btnLang.value = language


btnLang.addEventListener("click", function() {
  // document.body.classList.toggle("dark-theme");
  // let theme = "light";
  // if (document.body.classList.contains("dark-theme")) {
  //   theme = "dark";
  // }
  // localStorage.setItem("theme", theme);
  dropdoun.classList.toggle("language__select-none")
});

function closeAllSelect(elmnt) {
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);