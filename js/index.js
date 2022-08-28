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
const stage1Name = document.querySelector('.stage1-name');
const stage2Name = document.querySelector('.stage2-name');
const stage3Name = document.querySelector('.stage3-name');
const start = document.querySelector('.back-to-begin');
const headerContainer = document.querySelector('.header-container');
const cardBack = document.querySelector('.deck-card-back');
const deckCards = document.querySelector('.deck-of-cards');
const deckCardsImg = document.querySelector('.deck-of-cards-img');

let map, mapNum, level, levelNum;

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

var cardsFileName = [
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

let cardsFileName1level = [
  ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15', 'green1', 'green12', 'green16', 'green17', 'green18'],
  ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20', 'brown11', 'brown12', 'brown13', 'brown14', 'brown21'],
  ['blue7', 'blue9', 'blue11', 'blue12', 'blue3', 'blue4', 'blue5', 'blue10']
]

let cardsFileName2level = [
  ['green2', 'green3', 'green4', 'green5', 'green6', 'green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15', 'green1', 'green12', 'green16', 'green17', 'green18'],
  ['brown6', 'brown7', 'brown8', 'brown9', 'brown10', 'brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20', 'brown11', 'brown12', 'brown13', 'brown14', 'brown21'],
  ['blue1', 'blue2', 'blue6', 'blue8', 'blue7', 'blue9', 'blue11', 'blue12', 'blue3', 'blue4', 'blue5', 'blue10']
]

let cardsFileName3level = [
  ['green2', 'green3', 'green4', 'green5', 'green6', 'green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15'],
  ['brown6', 'brown7', 'brown8', 'brown9', 'brown10', 'brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20'],
  ['blue1', 'blue2', 'blue6', 'blue8', 'blue7', 'blue9', 'blue11', 'blue12']
]

let cardGame = [
  [],
  [],
  []
]

start.addEventListener('click', () => {
  deck.classList.remove('active');
  ancients.classList.remove('active');
  start.classList.remove('active');
  cardBack.classList.remove('active');
  deckCards.classList.remove('active');
  mapStatus.textContent = 'Выберите карту древнего';
  levelStatus.textContent = '';
  headerContainer.style.justifyContent = 'center';
  stage1Name.style.textDecoration = 'none';
  stage2Name.style.textDecoration = 'none';
  stage3Name.style.textDecoration = 'none';
  cardCount = [
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
  ];

  cardGame = [
    [],
    [],
    []
  ];

  cardsFileName = [
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

  cardsFileName1level = [
    ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15', 'green1', 'green12', 'green16', 'green17', 'green18'],
    ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20', 'brown11', 'brown12', 'brown13', 'brown14', 'brown21'],
    ['blue7', 'blue9', 'blue11', 'blue12', 'blue3', 'blue4', 'blue5', 'blue10']
  ]

  cardsFileName2level = [
    ['green2', 'green3', 'green4', 'green5', 'green6', 'green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15', 'green1', 'green12', 'green16', 'green17', 'green18'],
    ['brown6', 'brown7', 'brown8', 'brown9', 'brown10', 'brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20', 'brown11', 'brown12', 'brown13', 'brown14', 'brown21'],
    ['blue1', 'blue2', 'blue6', 'blue8', 'blue7', 'blue9', 'blue11', 'blue12', 'blue3', 'blue4', 'blue5', 'blue10']
  ]

  cardsFileName3level = [
    ['green2', 'green3', 'green4', 'green5', 'green6', 'green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15'],
    ['brown6', 'brown7', 'brown8', 'brown9', 'brown10', 'brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20'],
    ['blue1', 'blue2', 'blue6', 'blue8', 'blue7', 'blue9', 'blue11', 'blue12']
  ]
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
  })
})

function addCards() {
  let arr;

  if ((levelNum === 0) || (levelNum === 4)) {
    arr = cardsFileName;
  } else if (levelNum === 1) {
    arr = cardsFileName1level;
  } else if (levelNum === 2) {
    arr = cardsFileName2level;
  } else if (levelNum === 3) {
    arr = cardsFileName3level;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function pushArrCard(stage, k) {
    if (levelNum === 0) {
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
    } else if ((levelNum === 1) || (levelNum === 2) || (levelNum === 3)) {
      for (let i = 0; i < cardCount[mapNum][stage][k]; i++) {
        let items = arr[k];
        let item = items[Math.floor(Math.random() * items.length)];
        cardGame[stage].push(item);
        if (items.indexOf(item) !== -1) {
          items.splice(items.indexOf(item), 1);
        }
      }
    } else if (levelNum === 4) {
      for (let i = 0; i < cardCount[mapNum][stage][k]; i++) {
        let items = arr[k][0];
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
  }

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      pushArrCard(i, j);
    }
    shuffle(cardGame[i]);
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

function showCard(i) {
  let dir;
  let stageStatus = 0;
  let fileName = cardGame[i][0];

  if (cardGame[0].length === 0) {
    i = 1;
    stageStatus = 1;
    stage1Name.style.textDecoration = 'line-through';
    fileName = cardGame[i][0];
  }

  if ((cardGame[0].length === 0) && (cardGame[1].length === 0)) {
    i = 2;
    stageStatus = 2;
    stage2Name.style.textDecoration = 'line-through';
    fileName = cardGame[i][0];
  }

  if ((cardGame[0].length === 0) && (cardGame[1].length === 0) && (cardGame[2].length === 1)) {
    cardBack.classList.add('active');
    stage3Name.style.textDecoration = 'line-through';
  }

  if (fileName.includes('bl')) {
    dir = 'blue';
    let nC = 2;
    if (stageStatus === 0) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage1, 0);

    if (stageStatus === 1) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage2, 1);

    if (stageStatus === 2) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage3, 2);

  } else if (fileName.includes('br')) {
    dir = 'brown';
    let nC = 1;
    if (stageStatus === 0) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage1, 0);

    if (stageStatus === 1) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage2, 1);

    if (stageStatus === 2) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage3, 2);

  } else if (fileName.includes('gr')) {
    dir = 'green';
    let nC = 0;
    if (stageStatus === 0) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage1, 0);

    if (stageStatus === 1) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage2, 1);

    if (stageStatus === 2) {
      cardCount[mapNum][stageStatus][nC] = cardCount[mapNum][stageStatus][nC] - 1;
    }
    addCardCount(stage3, 2);
  }

  deckCardsImg.setAttribute('src', `assets/MythicCards/${dir}/${fileName}.png`);
  cardGame[i].splice(0, 1);
}

cardBack.addEventListener('click', () => {
  showCard(0);
  deckCards.classList.add('active');
})