let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

import confetti from 'https://cdn.skypack.dev/canvas-confetti';
// PINTAMOS LAS CARDS
const $gridContainer = document.querySelector('.b-grid');
const $attempsNumber = document.querySelector('[data-function="attempts"]');
const $score = document.querySelector('[data-function="score"]');
const defaultUrl = 'public/exercise-1/universe.svg';
$attempsNumber.innerHTML = 0
$score.innerHTML = 0

let hasFlippedCard = false;
let firstCard, secondCard;
let bloqueado = false


cardArray.map(carta => {
    const $card = document.createElement('div');
    $card.classList.add('card');
    $card.dataset.nombre = carta.name
    $card.innerHTML = `
        <img src="${ defaultUrl}" alt="${carta.name}" class="front-image" />
        <img src="${carta.img}" alt="${carta.name}" class="back-image" />
    `
    $gridContainer.append($card);
})


const cartas = document.querySelectorAll('.card');


const flipCard = (e) => {
  if(bloqueado) return
  if(e.target.parentNode === firstCard) return
  e.target.parentNode.classList.toggle('girar')

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = e.target.parentNode;
  }else {
    hasFlippedCard = false;
    secondCard = e.target.parentNode

    coinciden();
    if($score.innerHTML == 6){
      console.log('hemos terminado')
      confetti()
      setTimeout(() => {
        $gridContainer.innerHTML = `<h1>Completado</h1>` 
      }, 1000);
    }
  }
}
cartas.forEach(carta => {
  carta.addEventListener('click', flipCard)
})

const coinciden = () => {
  firstCard.dataset.nombre === secondCard.dataset.nombre ? quitarEvento() : nocoinciden();
}
const quitarEvento = () => {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  $score.innerHTML++
  $attempsNumber.innerHTML++
}
const nocoinciden = () => {
  bloqueado = true
  setTimeout(() => {
    firstCard.classList.remove('girar');
    secondCard.classList.remove('girar');
    bloqueado = false;
    $attempsNumber.innerHTML++
    resetear();
  }, 1000);
}

const resetear = () => {
[hasFlippedCard, bloqueado] = [false, false];
[firstCard, secondCard] = [ null, null];
}

(function barajar(){
  cartas.forEach(carta => {
    let ramdonPos = Math.floor(Math.random() * 12);
    carta.style.order = ramdonPos
  })
})()