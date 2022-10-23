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
    baralho.sort(comparador);
    console.log(baralho);
  }





