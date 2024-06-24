const bugreButton = document.querySelector('.js-toggle-button');
const burgerMenu = document.querySelector('.main-navigation__list');

function onBurgerMenuClick () {
  if (burgerMenu.classList.contains('main-navigation__list--open')) {
    bugreButton.classList.remove('main-navigation__burger-button--close');
    burgerMenu.classList.remove('main-navigation__list--open');
  } else {
    bugreButton.classList.add('main-navigation__burger-button--close');
    burgerMenu.classList.add('main-navigation__list--open');
  }
}

export function addBurgerEvent () {
  burgerMenu.classList.remove('main-navigation__list--no-js');
  bugreButton.addEventListener('click', onBurgerMenuClick);
}

