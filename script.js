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
      prompt("Digite a quantidade de cartas (Escolha um numero par entre 4 e 14)")
    );
    while (gameinvalid()) {
      quantidadecartas = Number(
        prompt(
          "Digite a quantidade de cartas (Escolha um numero par entre 4 e 14)"
        )
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
      memorygame.innerHTML +=
        `
        <li class="memory-card onclick='virarCarta(this)">
          <div class="front-face face">
            <img src="imagens/front.png" alt="" />
          </div>
          <div class="back-face face">
            <img src="imagens/${baralho[i]}.gif" alt="" />
          </div>
        </li>`;
    }
}



