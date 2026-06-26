//pegando os valores dos campos pelo id
const formulario = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

//disparando o evento
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    //verificando se os campos estão preenchidos corretamente
    if (!nome.value) {
        alert('Digite seu nome');
    } else if (!email.value) {
        alert('Digite seu e-mail');
    } else if (!email.checkValidity()) {
        alert('Digite um e-mail válido');
    } else if (!mensagem.value) {
        alert('Digite uma mensagem');
    } else {
        alert('Mensagem enviada com sucesso!');
        formulario.reset();
    }
});