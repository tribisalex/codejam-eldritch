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
const stage2 = document.querySelector('.stage2');
const stage3 = document.querySelector('.stage3');
const start = document.querySelector('.back-to-begin');
const headerContainer = document.querySelector('.header-container');
const cardBack = document.querySelector('.deck-card-back');
const deckCards = document.querySelector('.deck-of-cards');
const deckCardsImg = document.querySelector('.deck-of-cards-img');

let map, mapNum, level, levelNum;

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
    mapNum = i;
  })
})

let cardCount = [
  [
    [0, 2, 2],
    [1, 3, 0],
    [3, 4, 0]
  ],
  [
    [1, 2, 1],
    [3, 2, 1],
    [2, 4, 0]
  ],
  [
    [0, 2, 1],
    [2, 3, 1],
    [3, 4, 0]
  ],
  [
    [1, 2, 1],
    [2, 3, 1],
    [2, 4, 0]
  ]
]

buttonLevels.forEach((el, i) => {
  el.addEventListener('click', () => {
    level = el.textContent;
    levelNum = i;
    closeLevels();
    mapStatus.textContent = `Карта древнего: ${map}`;
    levelStatus.textContent = `Уровень сложности: ${level}`;
    addCardCount(stage1, 0);
    addCardCount(stage2, 1);
    addCardCount(stage3, 2);
    addCards();
    console.log('Итоговый ', cardGame);
  })
})

// var item = items[Math.floor(Math.random()*items.length)];

let cardsFileName = [
  [
    ['green2', 'green3', 'green4', 'green5', 'green6'],
    ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15'],
    ['green1', 'green12', 'green16', 'green17', 'green18']
  ],
  [
    ['brown6', 'brown7', 'brown8', 'brown9', 'brown10'],
    ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20'],
    ['brown11', 'brown12', 'brown13', 'brown14', 'brown21']
  ],
  [
    ['blue1', 'blue2', 'blue6', 'blue8'],
    ['blue7', 'blue9', 'blue11', 'blue12'],
    ['blue3', 'blue4', 'blue5', 'blue10']
  ]
]

let cardGame = [
  [],
  [],
  []
]

// var item = cardsFileName[1][2][Math.floor(Math.random()*cardsFileName.length)];
// if (!cardGame[num].includes(item)) {
//   cardGame[num].push(item);
// } else {
//   item = cardsFileName[1][2][Math.floor(Math.random()*cardsFileName.length)];
// }


function addCards() {
  let arr = cardsFileName;

  console.log('исходный ', arr);

  if (levelNum === 0) {
    function pushArrCard(stage, k) {
      for (let i = 0; i < cardCount[mapNum][stage][k]; i++) {
        let items = arr[k][2];
        let item = items[Math.floor(Math.random() * items.length)];
        if (item === undefined) {
          items = arr[k][1];
          item = items[Math.floor(Math.random() * items.length)];
        }
        cardGame[stage].push(item);
        if (items.indexOf(item) !== -1) {
          items.splice(items.indexOf(item), 1);
        }
      }
    }
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    pushArrCard(0, 0);
    pushArrCard(0, 1);
    pushArrCard(0, 2);
    shuffle(cardGame[0]);

    pushArrCard(1, 0);
    pushArrCard(1, 1);
    pushArrCard(1, 2);
    shuffle(cardGame[1]);

    pushArrCard(2, 0);
    pushArrCard(2, 1);
    pushArrCard(2, 2);
    shuffle(cardGame[2]);
  }




  if (levelNum === 1) {

  }

  if (levelNum === 2) {

  }

  if (levelNum === 3) {

  }

}


function addCardCount(stageNum, num) {
  let stage = stageNum;

  for (let i = 0; i < 3; i++) {
    if (stage.children[i].classList.contains('green')) {
      stage.children[i].textContent = cardCount[mapNum][num][0];
    }
    if (stage.children[i].classList.contains('brown')) {
      stage.children[i].textContent = cardCount[mapNum][num][1];
    }
    if (stage.children[i].classList.contains('blue')) {
      stage.children[i].textContent = cardCount[mapNum][num][2];
    }
  }
}

function showCard() {
  let dir
  if (cardGame[0][0].includes('bl')) {
    dir = 'blue';
  } else if (cardGame[0][0].includes('br')) {
    dir = 'brown';
  } else if (cardGame[0][0].includes('gr')) {
    dir = 'green';
  }
  deckCardsImg.setAttribute('src', `assets/MythicCards/${dir}/${cardGame[0][0]}.png`);
  cardGame[0].splice(0, 1);
  console.log('После удаления ', cardGame);

  console.log(deckCardsImg);
}

cardBack.addEventListener('click', () => {
  showCard();
  deckCards.classList.add('active');
})