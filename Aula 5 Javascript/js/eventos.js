// Carregamento da página
window.addEventListener("load", function () {
    console.log("Página carregada com sucesso!")
})

// duplo clique
document.querySelector("h2").addEventListener("dblclick", function () {
    alert("Double kill!")
})

// Change - Assim que sair do campo selecionado e tiver alterado o valor ele retorna  a informação.
document.getElementById("nome").addEventListener("change", function (evento) {
    console.log(evento)
    alert("O novo nome é " + evento.target.value)
})

// Input - assim que a pessoa digita os dados ele ja retorna, assim que entrar o dado ele notifica
document.getElementById("idade").addEventListener("input", function (evento) {
    console.log("A nova idade é: " + evento.target.value)
})

// Click 
document.querySelector("button[type='button']").addEventListener("click", function () {
    alert("Clica na tua mão rapaz!")
})

// Submit
document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault()
    alert("Submit!")
})