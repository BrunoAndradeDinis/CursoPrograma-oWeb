document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault()
    let cateto1 = document.getElementById("cateto1").value
    let cateto2 = document.getElementById("cateto2").value
    let soma = Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
    let hipotenusa = Math.sqrt(soma) /*Math.sqrt((cateto1 * 2) + (cateto2 * 2))*/
    console.log(hipotenusa)
    let resultado = document.createElement("h4")
    if (document.querySelector("h4") != undefined) {
        document.querySelector("h4").remove()
    }

    resultado.innerHTML = `O resultado da hiptenusa é ${hipotenusa.toFixed(2)}`
    document.querySelector("fieldset").appendChild(resultado)

})