    var frutas = ["Maçã", "Banana", "Manga"]

    console.log(frutas)
    // Métodos de arrays
    // Adiciona um item ao final do array
    frutas.push("Mamão")
    console.log(frutas) // mamão++

    // Remove o ultimo item do array
    frutas.pop()
    console.log(frutas) // mamão--

    // Insere um item no ínicio do array
    frutas.unshift("Pêra") // pera++
    console.log(frutas)

    // Remove o primeiro item do array
    frutas.shift() // pera--
    console.log(frutas)

    // Encontra a posição  de um item no array
    var posicao = frutas.indexOf("Manga")
    console.log(posicao)

    // Ordernar por ordem alfabética
    frutas.sort()
    console.log(frutas)

    // Inverter dados do array
    frutas.reverse()
    console.log(frutas)

    // Seleciona um pedaço do array
    var pedaco = frutas.slice(0, 1) // começa na posição 0 e pega 1 pedaço
    console.log(`Pedaço = ${pedaco}`)

    // Remove diversos itens de um array
    frutas.splice(2,
        1
    ) // (2(é a posição no array que vai começar a retirar os itens), 1(a quantidade de itens a se retirar))banana-- 
    console.log(frutas)

    // Unifica os dado de um array
    var nome = ["Bruno", "de", "Andrade"]
    var nomeCompleto = nome.join(" ") // (" ") é o separador entre os itens
    console.log(nomeCompleto)

    // Unifica os arrays
    var a = [1, 2, 3]
    var b = [4, 5, 6]
    var c = [7, 8, 9]
    console.log(a, b)
    var unificado = a.concat(b, c) // [1 2 3 + 4 5 6 + 7 8 9]
    console.log(unificado)

    // Array de objetos ou array de arrays
    var alunos = [{
        nome: "Bruno",
        idade: 26,
    }, {
        nome: "aiousdhiasd",
        idade: 24
    }]

    // Acessa cada item de um array
    alunos.forEach(function (aluno, posicao) {
        console.log(`${posicao} = ${aluno.nome}, ${aluno.idade} anos`)
        console.log(aluno)
    })

    // Encontra a posição de um item
    var posicao = alunos.findIndex(function (aluno) {
        return aluno.nome == "Bruno"
    })

    console.log(posicao) // posição 0 é a posição do alunos.aluno.nome

    // Modifica cada item do array
    var idades = alunos.map(function (aluno, ) {
        return aluno.idade
    })

    console.log(idades)

    // Busca um dado no array (retorna o primeiro dado)
    var encontrado = alunos.find(function (aluno) {
        return aluno.nome == "aiousdhiasd"
    })

    console.log(encontrado)

    // Busca dados no array (Todas correspondencias)
    var encontrados = alunos.filter(function (aluno) {
        return aluno.idade > 24
    })
    console.log(encontrados)