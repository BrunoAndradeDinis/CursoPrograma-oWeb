document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault()
    let meta = document.getElementById("meta").value
    let vendido = document.getElementById("vendido").value
    let atingimento = (vendido / meta) * 100
    let resultado = document.createElement(
        "h5") // aqui ele cria o elemento que será adicionado ao documento

    if (document.querySelector("h5") !=
        undefined) { // aqui é uma condição para validar se tem algum h5 para ser removido no body.
        document.querySelector("h5").remove()
    }

    resultado.innerHTML = `A porcentagem de meta atingida até agora é R$ ${atingimento.toFixed(2)}%`
    document.querySelector("fieldset").appendChild(resultado) // aqui ele inclui o elemento ao documento
    console.log(resultado)

})