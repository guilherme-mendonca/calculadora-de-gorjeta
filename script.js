let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta) /* Esse evento é acionado toda vez que o usuário mexe dentro do input*/

function receberValorConta(evento) { /* "console.log(evento.target.value)"  Toda vez que o usuário digitar no input, a gente pega a informação value(valor) do que foi digitado*/
    conta = Number(evento.target.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
const paragrafoErro = document.querySelector(".pessoas #erro")
const divErro = document.querySelector(".pessoas .input-box")

    if(evento.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => { /* "forEach" O jS vai passar em cada um dos botões*/
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento) {
    porcentagem = Number(evento.target.value) / 100
    
}