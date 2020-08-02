/*
    function openMenuSection1() {
        document.querySelector(".section-1__main-menu").style.display = "block";
        document.querySelector(".main-nav__btn-close").style.display = "block";
        document.querySelector(".section-1__main-nav").style.display = "none";
    }

    function closeMenuSection1() {
        document.querySelector(".section-1__main-menu").style.display = "none";
        document.querySelector(".main-nav__btn-close").style.display = "none";
        document.querySelector(".section-1__main-nav").style.display = "flex";
    }
*/

var ESC_CODE = 'Escape';
var ENTER_CODE = 'Enter';

var section1MainNav = document.querySelector(".section-1__main-nav"); // кнопка бургер и заголовок Navigation
var section1MainMenu = document.querySelector(".section-1__main-menu"); // меню со ссылками (при нажатой кнопке бургера)
var mainNavBtnClose = document.querySelector(".main-nav__btn-close"); // кнопка закрытия меню со ссылками (при нажатой кнопке бургера)
var urlLinkImgStwo = document.querySelector(".url__link-img-s-two"); // стрелка вправо во второй секции
var urlLinkImgSthree = document.querySelector(".url__link-img-s-three"); // стрелка вправо в третьей секции
var getOpenBurgerMenu = function () {
  section1MainNav.classList.add('hidden');
  section1MainMenu.classList.add('no-hidden');
  section1MainMenu.classList.remove('hidden');
  mainNavBtnClose.classList.remove('hidden');
  urlLinkImgStwo.classList.add('fix-arrow-sect-two');
  urlLinkImgSthree.classList.add('fix-arrow-sect-three');
  document.removeEventListener('click', getCloseBurgerMenu);
};

var mainNavBtnOpen = document.querySelector(".main-nav__btn-open");

mainNavBtnOpen.addEventListener('click', function () {
  getOpenBurgerMenu();
});

mainNavBtnOpen.addEventListener('keydown', function (evt) { // открывает меню при нажатии кнопки Enter, если кнопка бургера в фокусе
  if (evt.key === ENTER_CODE) {
    getOpenBurgerMenu();
  }
});

var getCloseBurgerMenu = function () {
  section1MainNav.classList.remove('hidden');
  section1MainMenu.classList.remove('no-hidden');
  section1MainMenu.classList.add('hidden');
  urlLinkImgStwo.classList.remove('fix-arrow-sect-two');
  urlLinkImgSthree.classList.remove('fix-arrow-sect-three');
  document.removeEventListener('click', getOpenBurgerMenu);
};

mainNavBtnClose.addEventListener('click', function () {
  getCloseBurgerMenu();
});

var mainMenuItemOne = document.querySelector(".main-menu__item-one");
var mainMenuItemTwo = document.querySelector(".main-menu__item-two");
var mainMenuItemThree = document.querySelector(".main-menu__item-three");
var mainMenuItemFour = document.querySelector(".main-menu__item-four");
var mainMenuItemFive = document.querySelector(".main-menu__item-five");

mainMenuItemOne.addEventListener('keydown', function (evt) { // закрывает меню при нажатии кнопки Escape, если кнопка бургера в фокусе
  if (evt.key === ESC_CODE) {
    getCloseBurgerMenu();
  }
});
mainMenuItemTwo.addEventListener('keydown', function (evt) { // закрывает меню при нажатии кнопки Escape, если кнопка бургера в фокусе
  if (evt.key === ESC_CODE) {
    getCloseBurgerMenu();
  }
});
mainMenuItemThree.addEventListener('keydown', function (evt) { // закрывает меню при нажатии кнопки Escape, если кнопка бургера в фокусе
  if (evt.key === ESC_CODE) {
    getCloseBurgerMenu();
  }
});
mainMenuItemFour.addEventListener('keydown', function (evt) { // закрывает меню при нажатии кнопки Escape, если кнопка бургера в фокусе
  if (evt.key === ESC_CODE) {
    getCloseBurgerMenu();
  }
});
mainMenuItemFive.addEventListener('keydown', function (evt) { // закрывает меню при нажатии кнопки Escape, если кнопка бургера в фокусе
  if (evt.key === ESC_CODE) {
    getCloseBurgerMenu();
  }
});

var mainNavBtnCloseBefore = document.querySelector(".main-nav__btn-close");

mainNavBtnCloseBefore.addEventListener('keydown', function (evt) { // закрывает меню при нажатии кнопки Escape, если кнопка бургера в фокусе
  if (evt.key === ESC_CODE) {
    getCloseBurgerMenu();
  }
});