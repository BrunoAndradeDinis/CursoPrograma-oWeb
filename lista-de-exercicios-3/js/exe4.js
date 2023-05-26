document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault()
    let numeros = document.getElementById("num").value
    console.log(numeros)
    var array = numeros.split(",") // vai separar os números onde tiver ',' e criar um array de string
    console.log(array)

    var lista = array.map(function (numeros) {
        return Number(numeros) // vai remapear as strings num novo array de números, modificando cada item do array para o tipo número.
    })
    console.log(lista)

    console.log(...lista) // assim ele quebra o array, realiza a quebra de estrutura do array deixando cada número separado sendo possível a utilização do Math.max que não aceita arrays, mas aceita os números espalhados.

    var mario = Math.max(...lista)
    console.log(mario)

    var resultado = document.createElement("h5") // aqui ele cria o elemento que será adicionado ao documento

    if (document.querySelector("h5") !=
        undefined) { // aqui é uma condição para validar se tem algum h5 para ser removido no body.
        document.querySelector("h5").remove()
    }

    resultado.innerHTML = `O maior número da lista é o número ${mario}`
    document.querySelector("fieldset").appendChild(resultado)
})