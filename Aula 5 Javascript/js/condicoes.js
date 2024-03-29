        var idade = 20
        var saldo = 40
        var entrada = 15
        var classificacao = 16
        var responsavel = true
        var estado = "SP"

        // Comparações
        // Maior ou ig ual
        if (idade >= 18) {
            console.log("Maior de idade!")
        } else {
            console.log("Menor de idade!")
        }

        // Igual == ele vai igualar os tipos de váriaveis antes de comparar o valor e === vai comparar o tipo e o valor
        if (idade == "20") {
            console.log("Maior de idade!")
        }
        // Estritamente igual
        if (idade === 20) {
            console.log("Maior de idade! " + idade + " anos.")
        }

        // Diferente
        if (idade != "20") {
            console.log("É diferente de " + idade) //não aparece pois compara apenas o valor e não o tipo
        }

        // Estritamente diferente
        if (idade !== "20") {
            console.log("É diferente de " + idade)
        }

        // Maior
        if (idade > 10) console.log("Tem mais de 10 anos")

        // Menor
        if (idade < 40) console.log("Tem menos de 40 anos")

        idade = 17
        // Menor ou igual
        if (idade <= 17) console.log("Tem 17 anos ou menos!")

        // Multiplas condições
        // Else if
        if (idade <= 10) console.log("Não paga entrada")
        else if (idade < 18) console.log("Paga meia entrada")
        else if (idade >= 18) console.log("Paga entrada completa")

        // AND = && 
        idade = 20
        if (idade >= 18 && saldo >= entrada) console.log(`Pode entrar e esse é seu troco R$${saldo - entrada}`)

        // OR = || 
        idade = 12
        responsavel = false
        if (idade >= classificacao || responsavel) console.log("Pode entrar menó o/")
        else console.log("Pode entrar não menó :/")

        // Switch case 
        function valorzin(x) {
            var x
            switch (x) {
                case "MG":
                    x = "Minas Gerais";
                    break;
                case "ES":
                    x = "Espirito Santo";
                    break;
                case "RJ":
                    x = "Rio de Janeiro";
                    break;
                case "SP":
                    x = "São Paulo";
                    break;
                default:
                    x = "Não especificado";
                    break;
            }
            console.log(x)

        }

        valorzin(estado)
        valorzin("BA")

        // Operador condicional ternário 

        // Caso retorne true
        var idade = 22
        var maiorDeIdade = idade >= 18 ? "Maior de Idade!" : "Menor de Idade"
        // if (idade >= 18) maiorDeIdade = "Maior de Idade"
        // else maiorDeIdade = "Menor de idade"
        console.log(maiorDeIdade)

        // Caso retorne false
        idade = 17
        var maiorDeIdade = idade >= 18 ? "Maior de Idade!" : "Menor de Idade"
        console.log(maiorDeIdade)

        // Testando se o valor existe
        var idadeExiste = idade ? true : false
        console.log(idadeExiste)

        idade = null
        idadeExiste = idade ? true : false
        console.log(idadeExiste)