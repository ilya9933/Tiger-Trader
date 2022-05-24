const header = document.querySelector('.header');
const hamburger = document.getElementById('hamburger__toggle');
let scrollPrev = 0;

window.addEventListener('scroll', function() {
  if (hamburger.checked) {
    return
  }
  let scrolled = window.scrollY;

  if ( scrolled > 170 && scrolled > scrollPrev ) {
    header.classList.add('out');
  } else {
    header.classList.remove('out');
  }
  scrollPrev = scrolled;
});
