function alterarStatus(id) {
    let gameClickado = document.getElementById(`game-${id}`);
    let imagem = gameClickado.querySelector('.dashboard__item__img'); 
    let botao = gameClickado.querySelector('.dashboard__item__button');  
/* A função alterarStatus seleciona um elemento HTML com um ID específico (game-${id}) e, dentro desse
 elemento, seleciona três elementos filhos com classes específicas (dashboard__item__img e dashboard__item__button */
  
    if (imagem.classList.contains('dashboard__item__img--rented')) { //verificando se a imagem está alugada
        if (confirm("Você deseja devolver o jogo?")) { // Adicionando um prompt de confirmação
        imagem.classList.remove('dashboard__item__img--rented'); //retirando a classe
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent  = 'Alugar'; //alterando o texto do botão
        }
    } else  {
        imagem.classList.add('dashboard__item__img--rented');  //adicionando a classe
        botao.textContent  = 'Devolver'; //alterando o texto do botão
        botao.classList.add('dashboard__item__button--return');
    }

}