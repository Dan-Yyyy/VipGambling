const ru = document.querySelector('#ru');
const en = document.querySelector('#en');
const ua = document.querySelector('#ua');
const allButtons = document.querySelectorAll('.header-button');

const ruText = document.querySelectorAll('.ru');
const enText = document.querySelectorAll('.en');
const uaText = document.querySelectorAll('.ua');

ru.addEventListener('click', langRU);
en.addEventListener('click', langEN);
ua.addEventListener('click', langUA);

function langRU() {
  if(!ru.classList.contains('header-button_active')) {
    ruText.forEach(item => item.style.display = 'block');
    allButtons.forEach(button => button.classList.remove('header-button_active'));
    enText.forEach(item => item.style.display = 'none');
    uaText.forEach(item => item.style.display = 'none');
    ru.classList.add('header-button_active');
  }
};

function langEN() {
  if(!en.classList.contains('header-button_active')) {
    enText.forEach(item => item.style.display = 'block');
    allButtons.forEach(button => button.classList.remove('header-button_active'));
    ruText.forEach(item => item.style.display = 'none');
    uaText.forEach(item => item.style.display = 'none');
    en.classList.add('header-button_active');
  }
};

function langUA() {
  if(!ua.classList.contains('header-button_active')) {
    uaText.forEach(item => item.style.display = 'block');
    allButtons.forEach(button => button.classList.remove('header-button_active'));
    ruText.forEach(item => item.style.display = 'none');
    enText.forEach(item => item.style.display = 'none');
    ua.classList.add('header-button_active');
  }
};
