document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault()
    let raio = document.getElementById("raio").value
    let area = 2 * Math.PI * raio
    console.log(area)
    let resultado = document.createElement("h4")
    if (document.querySelector("h4") != undefined) {
        document.querySelector("h4").remove()
    }

    resultado.innerHTML = `A area do circulo é ${area.toFixed(2)}`
    document.querySelector("fieldset").appendChild(resultado)

})