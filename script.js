var fechar = document.querySelector("input");
var iframeContainer = document.getElementById("iframeContainer");

fechar.addEventListener("click", function () {
    iframeContainer.style.display = "none";
});

var anchorList = document.querySelectorAll('a.btn-secondary');
var iframe = document.querySelector("iframe")
console.log(iframe)
// Adiciona um evento de clique em cada âncora
anchorList.forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do clique no link

        var href = event.target.href; // Obtém o valor do atributo href
        console.log(href)
        iframe.src = href; // Atribui o valor do atributo href ao atributo src do iframe

        iframeContainer.style.display = "block";

        let completa = document.querySelector("a")
        completa.href = href
    });
});