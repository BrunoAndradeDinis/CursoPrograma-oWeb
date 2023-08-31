function acessarDOM() {
    // Todo o corpo do documento
    console.log(document.body)

    // Busca pela TAG 
    var tagsP = document.getElementsByTagName("p")
    console.log(tagsP)

    // Busca pela classe
    var divs = document.getElementsByClassName("container")
    console.log(divs)

    // Busca pelo nome 
    var radios = document.getElementsByName("curtir")
    console.log(radios)

    // Busca pelo ID 
    var nome = document.getElementById("nome")
    console.log(nome.value)
    alert(nome.value)

    // Busca por seletor 
    var curtido = document.querySelector("input[type='radio']:checked")
    console.log(curtido.value)

    // Busca por seletor 
    var pS = document.querySelector("p")
    console.log(pS)
    pS = document.querySelectorAll("p")
    console.log(pS)

}
//  HEAD

//insere um atributo
var input = document.getElementById("nome")
input.setAttribute("placeholder", "Digite o seu nome: ")

// le o valor de um atributo 
var atributs = input.getAttribute("placeholder")
console.log(atributs)

// altera o conteúdo interno de um elemento.
var paragrafo = document.querySelector("p")
paragrafo.innerHTML = "Rola meu amigo! Este é o conteúdo interno de um elemento."

// Escutador de eventos. 
paragrafo.addEventListener("click", function () {
    var soma = 2 + 2
    alert(`o primeiro paragráfo de soma ${soma}`)
})

// Estilos
paragrafo.style.color = "purple"
paragrafo.style.backgroundColor = "lightblue"

// altera o display 
var button = document.querySelector("button")

button.style.display = "block"
//altera cor do fundo
button.style.backgroundColor = "dodgerblue"
// altera a cor do texto
button.style.color = "aliceBlue"
// altera a borda do botão
button.style.border = "none"
// altera o espaçamento interno
button.style.padding = "1rem"
// altera a margem 
button.style.margin = "1rem 0"
// altera as bordas
button.style.borderRadius = "1rem"

// CRUD HTML - Create Remove Update Delete
//criar
var titulo = document.createElement("h1")
console.log(titulo)
titulo.innerHTML =
    "Esse será o titulo que a gente acabou de criar em JS" // aqui voce coloca o texto dentro dele
document.body.appendChild(
    titulo) // Aqui ele é atribuído ao body, sempre no seguimento de leitura de cima para baixo.

// READ - LER
var h1 = document.querySelector("h1")
console.log(h1.textContent)

// UPDATE - Atualizar
paragrafo.textContent = "Fui alterado por JS"

// DELETE - Apagar
var p = document.querySelector(".container p")
// p.remove()
var pai = p.parentElement
pai.remove(p)

// Insere um atributo
var input = document.getElementById("nome")
input.setAttribute("placeholder", "Digite seu nome!")

var atributo = input.getAttribute("placeholder")
console.log(atributo)