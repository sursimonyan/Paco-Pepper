const mediaQuery = window.matchMedia('(min-width: 991px)')
const header__mobile_menu = document.querySelector('.header__mobile_menu');
const header__menu_close = document.querySelector('.header__menu_close');
const faq__text_wrap = document.querySelector('.faq__text_wrap');
const faq__package_info = document.querySelectorAll('.faq__package_info');
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
  const toggleElement = this.querySelector('.faq__text_wrap')
  const openCloseIcon = this.querySelector('.faq__open_close_icon')
  toggleElement.classList.toggle('open')  
  openCloseIcon.classList.toggle('open')
}

header__mobile_menu.addEventListener('click', openBurgerMenu, false)
header__menu_close.addEventListener('click', closeBurgerMenu, false)
faq__package_info.forEach(el=>el.addEventListener('click', openCloseInfo, false))

mediaQuery.addEventListener('change', handleTabletChange, false)

handleTabletChange(mediaQuery)

