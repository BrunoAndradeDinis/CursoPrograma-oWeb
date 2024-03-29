// Listar Posts
fetch('https://jsonplaceholder.typicode.com/posts') // GET por padrão - pega por padrão
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))

// Buscar post
fetch('https://jsonplaceholder.typicode.com/posts/2') // GET por padrão - pega por padrão
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        document.querySelector(".post .title").textContent = json.title
        document.querySelector(".post .body").textContent = json.body
    })
    .catch((error) => console.log(error.message))

// Criar post
fetch('https://jsonplaceholder.typicode.com/posts', { // Como não é o get por padrão, temos que criar um objeto - Ele é POST
        method: 'POST', // temos que passar o método - no caso é o POST
        body: JSON.stringify({ // o .stringfy vai transformar o objeto em um objeto de texto para enviar para API interpreta-lo e converter novamente como objeto dentro da API.
            title: 'Testando meu caro',
            body: 'corpo do post',
            userId: 1,
        }),
        headers: { // Headers são importantes para informar a configuração da requisação, no caso abaixo, estamos informando que estamos mandando o conteúdo no tipo json com charset=utf8
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))


// Editar campo do post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH', // metodo
        body: JSON.stringify({
            title: 'foda-se',
        }),
        headers: { // header com o tipo de dado
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))

// Editar post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT', // nesse método tem que passar todos os campos do arquivo, alterando apenas o que deseja altera, passando todas as informações contidas nele, senão ele vai subir desfalcado
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))

// Delete post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error.message))