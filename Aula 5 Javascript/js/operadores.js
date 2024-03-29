        var x = 2;
        var y = 5;
        var resultado

        // Adição
        resultado = (x + y)
        console.log(`Adição de ${x} + ${y} = ${resultado}`)

        // Subtração
        resultado = (y - x)
        console.log(`Subtração de ${y} - ${x} = ${resultado}`)

        // Multiplicação 
        resultado = (x * y)
        console.log(`Multiplicação de ${x} * ${y} = ${resultado}`)

        // Divisão
        resultado = y / x
        console.log("Divisão " + y + " / " + x + " = " + resultado)

        // Exponenciação
        resultado = y ** x
        console.log(`Exponenciação de ${y} ^ ${x} = ${resultado}`)
        console.log(`Exponenciação de ${y} ^ ${x} = ${Math.pow(y,x)}`)

        // Raiz quadrada
        resultado = Math.sqrt(25)
        console.log(`Raiz quadrada de 25 = ${resultado}`)

        // Raiz cubica
        resultado = Math.cbrt(8)
        console.log(`Raiz cubica de 8 = ${resultado}`)

        // Resto da divisão
        resultado = y % x
        console.log(`Resto da divisão de  ${y} / ${x} = ${resultado}`)
        console.log(`Resto da divisão de  ${x} / ${x} = ${2%2}`)

        // Operadores de Atribuição
        var contador = 0
        var numeros = [1, 2, 3, 4, 5]

        // Atribuição de soma
        numeros.forEach(numero => {
            contador += numero
        })
        console.log(contador)

        // Atribuição de subtração
        numeros.forEach(numero => {
            contador -= numero
        })
        console.log(contador)

        var numero = numeros[0]

        // Atribuição de multiplicação
        numero *= 4
        console.log(numero)

        // Atribuição de divisão
        numero /= 2
        console.log(numero)

        // Atribuição de exponenciação
        numero **= 3
        console.log(numero)