let numeroMaximo = 5000;
let numeroSecreto;
let chute;
let tentativas;

function iniciarJogo() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('vitoria').style.display = 'none';
    numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    tentativas = 1;
    solicitarChute();
}

function solicitarChute() {
    chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}`);
    verificarChute();
}

function verificarChute() {
    if (chute == numeroSecreto) {
        mostrarTelaVitoria();
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
        solicitarChute();
    }
}

function mostrarTelaVitoria() {
    document.getElementById('vitoria').style.display = 'flex';
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
}

function reiniciarJogo() {
    document.getElementById('vitoria').style.display = 'none';
    iniciarJogo();
}

window.onload = function() {
    document.getElementById('inicio').style.display = 'flex';
};
