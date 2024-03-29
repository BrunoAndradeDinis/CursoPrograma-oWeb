var nome = "Bruno"
console.log(nome)
let idade = 26
console.log(idade)
const pi = 3.14
console.log(pi)
// Tipos de variáveis
// Booleano
var booleano = true // false
console.log(booleano)
console.log(typeof booleano)
// Nulo
var nulo = null // ter que ser tudo minúsculo
console.log(nulo)
console.log(typeof nulo)
// Indefinido
var Indefinido = undefined
console.log(Indefinido)
console.log(typeof Indefinido)


// Declarar variável sem definir valor ela será undefined
var indef
console.log(indef)
console.log(typeof indef)

// Número inteiro
var inteiro = 10
console.log(inteiro)
console.log(typeof inteiro)

// Número decimal 
var decimal = 5.12
console.log(decimal)
console.log(typeof decimal)

// String = texto (conjunto de caracteres)
var texto = "texto"
console.log(texto)
console.log(typeof texto)

// Array = vetor
var verto = [1, 2, 3, 4, 5] // a contagem das posições começa pelo 0 e assim por diante, caso vá manipular o 1 esta na posição 0
console.log(verto)
console.log(typeof verto)

// Objeto
var objeto = {
    nome: "Bruno",
    idade: 26,
    altura: 1.75,
    brasileiro: true
}
console.log(objeto)
console.log(typeof objeto)


// Reatribuição de valores
var a = "Texto"
console.log(a)
console.log(typeof a)
// valor reatribuido alterado também altera o tipo de variável.
a = 15
console.log(a)
console.log(typeof a)

// Reatribuir valores de arrays
var alfabeto = ["a", "b", "c", "d", "e", "f"]
console.log(alfabeto)
console.log(typeof alfabeto)

alfabeto[2] = "z"
console.log(alfabeto)
console.log(typeof alfabeto)

// Reatribuir valores em objetos
console.log(objeto)
objeto.nome = "Disney"
objeto["idade"] = 25
objeto.brasileiro = false
console.log(objeto)

// Concatenar Strings & variáveis concatenações gerais
// String
console.log("Hello " + "World!")

// String + var
console.log("Meu nome é " + nome)

var ano = 2023
console.log("Estamos no ano de " + ano)

// Template String
console.log(`Meu nome é ${nome}, e ano que vem será ${ano + 1}`)