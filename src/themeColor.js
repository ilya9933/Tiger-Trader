const btn = document.querySelector(".checkbox__subject");
const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

function firstTheme () {
  if (currentTheme) {
    if (currentTheme === 'dark') {
      document.body.classList.add("dark-theme");
    } else {
      btn.checked = true
    }
  } else if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    btn.checked = true
  }
}

firstTheme()
