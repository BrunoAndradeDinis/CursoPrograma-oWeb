document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault()

    let a = document.getElementById("numA").value
    let b = document.getElementById("numB").value
    let c = document.getElementById("numC").value
    console.log(a, b, c)

    let delta = Math.pow(b, 2) - (4 * a * c)
    console.log(delta)

    if (delta < 0) {
        alert("O valor de delta não pode ser negativo")
        return
    }

    let raizdelta = Math.sqrt(delta)
    console.log(raizdelta)

    let x1 = (-b + raizdelta) / (2 * a)
    let x2 = (-b - raizdelta) / (2 * a)
    console.log(x1, x2)

    let resultado = document.createElement("h3")

    if (document.querySelector("h3") != undefined) {
        document.querySelector("h3").remove()
    }

    resultado.innerHTML = `O valor de X1 é = ${x1.toFixed(2)} <br>O valor de x2 é = ${x2.toFixed(2)}`
    document.querySelector("fieldset").appendChild(resultado)



})