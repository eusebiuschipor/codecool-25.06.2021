const LIGHT = 'light';
const DARK = 'dark';
let currentTheme = LIGHT;
let themeSwitchBtn = document.getElementById('themeSwitch');
let body = document.body;
let navBar = document.querySelector('.navbar');
let cards = document.querySelectorAll('.card');
let table = document.querySelector('.table');
let cardsCol = document.getElementById('cards-col');
let footer = document.querySelector('nav:last-of-type > div');
let header = document.querySelector('h1');

const darkBg = 'bg-dark';
const lightBg = 'bg-light';
const navBarLight = 'navbar-light';
const navBarDark = 'navbar-dark';
const lightText = 'text-white';
const lightBorder = 'border-light';
const tableDark = 'table-dark';
const row = 'row';
const col = 'col';
const marginBot = 'mb-3';
const justifyContentEnd = 'justify-content-end';

function switchTheme() {
  // TODO: implement toggling the light/dark theme
  if (currentTheme === LIGHT) {
    darkTheme();
    currentTheme = DARK;
  } else {
    lightTheme();
    currentTheme = LIGHT;
  }
}

function darkTheme() {
  themeSwitchBtn.innerText = 'Activate Light Theme';
  body.classList.add(darkBg);
  body.classList.add(lightText);

  navBar.classList.add(darkBg, navBarDark);

  cards.forEach((card) => {
    card.classList.add(lightText, darkBg, lightBorder);
    card.classList.add(marginBot);
  })

  table.classList.add(tableDark);

  cardsCol.classList.toggle(row);
  cardsCol.classList.toggle(col);
  
  footer.classList.add(justifyContentEnd);

  header.innerText = "This is the Dark Theme";
}

function lightTheme() {
  themeSwitchBtn.innerText = 'Activate Dark Theme';
  body.classList.remove(darkBg);
  body.classList.remove(lightText);

  navBar.classList.remove(darkBg, navBarDark);

  cards.forEach((card) => {
    card.classList.remove(lightText, darkBg, lightBorder);
    card.classList.remove(marginBot);
  })

  table.classList.remove(tableDark);

  cardsCol.classList.toggle(row);
  cardsCol.classList.toggle(col);

  footer.classList.remove(justifyContentEnd);

  header.innerText = "This is the Light Theme";
}