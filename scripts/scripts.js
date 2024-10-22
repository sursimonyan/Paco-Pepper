const mediaQuery = window.matchMedia('(min-width: 991px)')
const header__mobile_menu = document.querySelector('.header__mobile_menu');
const header__menu_close = document.querySelector('.header__menu_close');
const litter__text_wrap = document.querySelector('.litter__text_wrap');
const litter__open_close_icon = document.querySelectorAll('.litter__open_close_icon');
const header__nav = document.querySelector('.header__nav');
const body = document.querySelector('body');

function handleTabletChange(e) {  
  if (e.matches) {    
    header__nav.classList.remove('open'); 
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

function openCloseInfo() {
  const toggleElement = this.parentNode.parentNode.querySelector('.litter__text_wrap')
  toggleElement.classList.toggle('open')  
  this.classList.toggle('open')
}

header__mobile_menu.addEventListener('click', openBurgerMenu, false)
header__menu_close.addEventListener('click', closeBurgerMenu, false)
litter__open_close_icon.forEach(el=>el.addEventListener('click', openCloseInfo, false))

mediaQuery.addEventListener('change', handleTabletChange, false)

handleTabletChange(mediaQuery)

