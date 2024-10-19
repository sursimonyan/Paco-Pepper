const mediaQuery = window.matchMedia('(min-width: 991px)')
const header__mobile_menu = document.querySelector('.header__mobile_menu');
const header__menu_close = document.querySelector('.header__menu_close');
const header__nav = document.querySelector('.header__nav');
const body = document.querySelector('body');

function handleTabletChange(e) {
  if (e.matches) {
    header__nav.classList.remove('open')
    body.classList.remove('opened-menu')
  }
}

function openBurgerMenu() {
  header__nav.classList.add('open')
  body.classList.add('opened-menu')
}

function closeBurgerMenu() {
  header__nav.classList.remove('open')
  body.classList.remove('opened-menu')
}

header__mobile_menu.addEventListener('click', openBurgerMenu)
header__menu_close.addEventListener('click', closeBurgerMenu)

mediaQuery.addEventListener(handleTabletChange)

handleTabletChange(mediaQuery)

