alert("Olá, seja bem vindo(a)!");
function abrirModal() {
    document.getElementById('fundo').style.display = 'flex';
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() { //Função com nome
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}
let mensagem = document.querySelector(".mensagem");

// mostra a mensagem
const showMessage = function () {
    return mensagem.style.display = "block";
}
// esconde a mensagem
const hideMessage = function () {
    return mensagem.style.display = "none";
}
//função anonima com retorno