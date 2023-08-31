// função simples
function aviso() {
    console.log("A function foi executada!")
    alert("Aviso! Este é um aviso!")
}

// chama a função
// aviso() 
var h1 = document.querySelector("h1")
console.log(h1)
h1.addEventListener("click", function () {
    aviso()
})

// Função com parametros
function soma(a, b) {
    var soma = a + b
    console.log(`o resultado da soma é: ${soma}`)

    return soma
}

// chama a função
// soma(2, 7)
// soma(99, 200)

var resultado = soma(234, 999)

console.log(resultado)

// escopos
// variável global
var global = 1

function escopo() {
    // variável local
    let local = 2

    console.log(global)
    console.log(local)
}
escopo()

console.log(global)
// console.log(local)

if (global === 1) {
    // variável com escopo de bloco
    let bloco = 3

    console.log(bloco)
}

// console.log(bloco)

// Arrow Function
// - Sem parametros - Sem parametros precisa do parenteses vazio "()".
const semParametros = () => {
    console.log("Sou uma função sem parametros.")
}

semParametros()

// - Somente um parametro - não precisa de parenteses
const comParametro = parametro => {
    console.log(parametro)
}

comParametro("Teste de arrow function com 1 parametro!")

// - Recebe mais de 1 parametro - precisa de parenteses
const multiParametro = (parametro1, parametro2) => {
    console.log(parametro1)
    console.log(parametro2)
}

multiParametro("Aqui é o parametro 1", "E aqui o parametro 2")

// - Arrow function dentro de método que recebe uma função
var lista = [1, 2, 3, 4, 5, 6]

lista.forEach(numero => {
    numero = numero * 2
    console.log(numero)
});

lista.forEach(valor => {
    console.log(valor)
})

// - Arrow function com retorno dentro de método que recebe uma função
var valoresMaisUm = lista.map(valor => valor + 1)
console.log(valoresMaisUm)

// Função que retorna promessa
function delay(seg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(seg)
        }, seg * 1000)
    })
}

// Função Assincrona
async function assincrona() {
    console.log("Iniciou a execução da função")
    let segundos

    segundos = await delay(3)
    console.log(`Demorou ${segundos} segundos para logar!`)
    segundos = await delay(5)
    console.log(`Demorou ${segundos} segundos para logar!`)
    segundos = await delay(10)
    console.log(`Demorou ${segundos} segundos para logar!`)
}
assincrona()

// Função assincrona que faz o Fetch
async function getData() {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(req)

        const res = await req.json()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}

getData()