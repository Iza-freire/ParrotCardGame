let quantidadecartas

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
  






