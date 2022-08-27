const ancients = document.querySelector('.ancients');
const modalLevels = document.querySelector('.modal-levels');
const overlay = document.querySelector('.overlay');
const modalLevelsName = document.querySelector('.modal-levels-name');
const ancientsImg = document.querySelectorAll('.ancients-img');
const buttonLevels = document.querySelectorAll('.button-levels');
const mapStatus = document.querySelector('.map-status');
const levelStatus = document.querySelector('.level-status');
const deck = document.querySelector('.deck');
const stage1 = document.querySelector('.stage1');
const start = document.querySelector('.back-to-begin');
const headerContainer = document.querySelector('.header-container');
const cardBack = document.querySelector('.deck-card-back');
const deckCards = document.querySelector('.deck-of-cards');

let map;
let level;

start.addEventListener('click', () => {
  deck.classList.remove('active');
  ancients.classList.remove('active');
  start.classList.remove('active');
  mapStatus.textContent = 'Выберите карту древнего';
  levelStatus.textContent = '';
  headerContainer.style.justifyContent = 'center';
})


function openLevels(map) {
  overlay.classList.add('active');
  ancients.classList.add('active');
  modalLevels.classList.add('active');
  modalLevelsName.textContent = `Выберите уровень сложности для карты ${map}`;
}

function closeLevels() {
  overlay.classList.remove('active');
  deck.classList.add('active');
  modalLevels.classList.remove('active');
  start.classList.add('active');
  headerContainer.style.justifyContent = 'space-between';
}

ancientsImg.forEach((el, i) => {
  el.addEventListener('click', () => {
    openLevels(el.alt);
    map = el.alt;
  })
})

buttonLevels.forEach((el, i) => {
  el.addEventListener('click', () => {
    level = el.textContent;
    closeLevels();
    mapStatus.textContent = `Карта древнего: ${map}`;
    levelStatus.textContent = `Уровень сложности: ${level}`;
  })
})

for (let i = 0; i < 3; i++) {
  if (stage1.children[i].classList.contains('green')) {
    stage1.children[i].textContent = 8;
  }
  if (stage1.children[i].classList.contains('brown')) {
    stage1.children[i].textContent = 8;
  }
  if (stage1.children[i].classList.contains('blue')) {
    stage1.children[i].textContent = 8;
  }
}

cardBack.addEventListener('click', () => {
  deckCards.classList.add('active');
})