        // Acessando o link https://example.com/?nome=Bruno&sobrenome=Andrade&idade=26
        // Esse "?" significa que estamos abrindo os parametros de URL para mandarmos para página
        const urlParams = new URLSearchParams(window.location.search)

        const nome = urlParams.get("nome")
        console.log(nome) // Retorna "Bruno"

        const sobrenome = urlParams.get("sobrenome")
        console.log(sobrenome) // Retorna "Andrade"

        const idade = urlParams.get("idade")
        console.log(idade) // Retorna 26