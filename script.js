let quantidadecartas

//lista de cartas
const cards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
  ];
  
const baralho = [];

//Verificando quantidade de cartas
function selecqtcards() {
    quantidadecartas = Number(
      prompt("Para iniciar o jogo digite a quantidade de cartas (Escolha um número par entre 4 e 14)")
    );
    while (gameinvalid()) {
      quantidadecartas = Number(
        prompt("Para iniciar o jogo digite a quantidade de cartas (Escolha um número par entre 4 e 14)")
      );
    }
    gerador();
  }
selecqtcards();

function gameinvalid() {
    if (
      isNaN(quantidadecartas) ||
      quantidadecartas < 4 ||
      quantidadecartas > 14 ||
      quantidadecartas % 2 !== 0
    ) {
      return true;
    }
    return false;
}
  
//gerando baralho
function gerador() {
    for (let i = 0; i < quantidadecartas / 2; i++) {
      let card = cards[i];
  
      baralho.push(card);
      baralho.push(card);
    }

     //comparando e embaralhando cartas
    baralho.sort(comparador);
    console.log(baralho);

    //renderizando baralho
    renderizaebaralho();
}

function comparador() {
    return Math.random() - 0.5;
}

function renderizaebaralho() {
  const memorygame = document.querySelector(".memory-game");

  for (let i = 0; i < baralho.length; i++) {
    memorygame.innerHTML += `
        <li class="memorycard" data-card="${baralho[i]}">
          <div class="front-face face">
            <img src="imagens/front.png" alt="" />
          </div>
          <div class="back-face face">
            <img src="imagens/${baralho[i]}.gif" alt="" />
          </div>
        </li>`;
  }
}


 //Virando as cartas

const cards2 = document.querySelectorAll(".memorycard");
let firstcard, secundcard;

let lockcard = false;

let jogadas = 0;

let acertos = 0;

function flipCard() {
  if (lockcard) return false;
  this.classList.add("flip");

  if (!firstcard) {
    firstcard = this;

    return false;
  }

  secundcard = this;

  jogadas++;

  checkForMatch();
}


 //Conferindo se as cartas viradas são iguais

function checkForMatch() {
  let isMatch = firstcard.dataset.card === secundcard.dataset.card;
  acertos = acertos + 2;

  finalizarJogo();

  !isMatch ? disablecards() : resetcards(isMatch);
}

 //desvirando as cartas diferente

function disablecards() {
  lockcard = true;
  setTimeout(() => {
    firstcard.classList.remove("flip");
    secundcard.classList.remove("flip");
    resetcards();
  }, 1000);
}

function resetcards(isMatch = false) {
  if (isMatch) {
    firstcard.removeEventListener("flip", flipCard);
    secundcard.removeEventListener("flip", flipCard);
  }
  [firstcard, secundcard, lockcard] = [null, null, false];
}

function finalizarJogo() {
  let ganhou = document.querySelectorAll(".flip");
  console.log(ganhou.length);
  if (ganhou.length === quantidadecartas) {
    setTimeout(() => {
      alert(`Parabéns! Você ganhou em ${acertos} jogadas! :)`);
    }, 1000);
  }
}

cards2.forEach((card) => card.addEventListener("click", flipCard));