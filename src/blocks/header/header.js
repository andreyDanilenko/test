(function () {
  const header = document.querySelector('.header');
  const btnBurger = document.querySelector('.header__burger-button');
  const hero = document.querySelector('.hero');
  if (btnBurger) {
    btnBurger.addEventListener('click', navShow);
  }
  function navShow() {
    hero.classList.toggle('hero--open')
    header.classList.toggle('header--opened');
  };
})()