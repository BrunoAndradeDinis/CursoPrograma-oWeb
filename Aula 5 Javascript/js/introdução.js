<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento HTML</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/google/code-prettify@master/styles/sunburst.css">
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/introducao-html.css">
    <link rel="icon" href="../icon.png">
</head>

<body>

    <div class="container">
        <h1>Introdução HTML</h1>

        <!-- Conteudo Principal -->
        <main>
            <!-- TAGS de Texto -->
            <h1>Essa é uma tag h1</h1>
            <h2>Essa é uma tag h2</h2>
            <h3>Essa é uma tag h3</h3>
            <h4>Essa é uma tag h4</h4>
            <h5>Essa é uma tag h5</h5>
            <h6>Essa é uma tag h6</h6>
            <p>Essa é uma tag de paragrafo</p>
            <label>Essa é uma tag de rotulo</label>
            <br>
            <strong>Essa é uma tag em negrito</strong>
            <br>
            <em>Essa é uma tag para enfase</em>
            <br>
            <i>Essa é uma tag para textos em outro idioma</i>
            <blockquote>"Essa é uma tag para citações"</blockquote>
            <pre>Essa é uma tag de texto pré-formatado (geralmente usado para incluir blocos de codigo)</pre>
            <a href="http://www.google.com" target="_blank">Essa é uma tag de link</a>
            <!-- Listas -->
            <h2>Lista Ordenada</h2>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
            <HR>
            </HR>
            <h2>Lista Não Ordenada</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
            </ul>

            <hr>

            <!-- Containers Genericos -->
            <div>
                Essa é uma tag div
                <h1>Essa é uma tag h1</h1>
                <h2>Essa é uma tag h2</h2>
                <h3>Essa é uma tag h3</h3>
                <h4>Essa é uma tag h4</h4>
                <h5>Essa é uma tag h5</h5>
                <h6>Essa é uma tag h6</h6>
            </div>
            <div>
                Essa é outra tag div
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis varius quam, vel molestie
                    ligula
                    vestibulum ac. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur
                    ridiculus mus. Proin ultrices ullamcorper leo ac viverra. Vivamus hendrerit, sem a tristique
                    rhoncus,
                    ligula quam placerat nisl, at lobortis tellus turpis ac ligula. Morbi fringilla orci justo, sed
                    maximus
                    ligula varius nec. Nullam urna nisl, egestas non risus eget, congue interdum dui. Nunc eu finibus
                    tellus. Praesent in purus nibh. Nullam eu aliquet orci.

                    Mauris egestas finibus eros, at condimentum ipsum mollis quis. Pellentesque tincidunt risus et risus
                    convallis, at facilisis ante pharetra. Ut eget mattis mi, mollis gravida lorem. Maecenas at viverra
                    felis, at pretium eros. Proin sed tortor dolor. In nec condimentum mi. Suspendisse potenti. Cras
                    sagittis elit massa. Aenean feugiat arcu leo, sit amet elementum purus lobortis ac. Praesent vitae
                    bibendum metus, at blandit lectus. Donec a velit eget mi fringilla aliquet. Integer aliquet ligula
                    ut
                    magna pretium semper. Ut ultricies, neque ut interdum pulvinar, erat nisl elementum diam, at aliquam
                    nisl risus quis lectus. Vivamus suscipit magna ut velit gravida condimentum ac at risus. Sed mattis
                    consectetur egestas. Mauris bibendum venenatis sapien.
                </p>
            </div>
            <span>
                Essa é uma tag span
            </span>
            <hr>
            <!-- Tabelas -->
            <h2>Tabela</h2>
            <table>
                <thead>
                    <tr>
                        <td>Linha</td>
                        <td>linguagem</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Html</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>CSS</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>JavaScript</td>
                    </tr>
                </tbody>
            </table>
            <!-- <table>
                <thead>
                    <tr>
                        <td>Linha</td>
                        <td>Site</td>
                        <td>Link</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>youtube</td>
                        <td><a href="youtube.com" target="_blank">youtube.com</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>google</td>
                        <td><a href="google.com" target="_blank">google.com</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>mozilla</td>
                        <td><a href="mozilla.com" target="_blank">mozilla.com</a></td>
                    </tr>
                </tbody>
            </table> -->
        </main>

        <!-- <div class="mt-3">
            <h2>CSS</h2>
        </div>
        
        <pre class="prettyprint">
            <code class="language-css">
    td {
        padding: 15px;
    }
    table, td {
        border: solid black 1px;
        border-spacing: 0;
    }
    thead {
        background-color: gray;
        color: white;
    }
    
    ol li:first-child {
        color: green;
    }
    ol li:last-child {
        color: red;
    }
    ul li:nth-child(odd) {
        background-color: #dddddd;
    }
    ul li:nth-child(even) {
        background-color: gray;
    }
            </code>
        </pre>

        <h2>HTML</h2>
        <pre class="prettyprint">
            <code class="language-html"><xmp>
    <!-- Conteudo Principal -->
        <main>
            <!-- TAGS de Texto
        <h1>Essa é uma tag h1</h1>
        <h2>Essa é uma tag h2</h2>
        <h3>Essa é uma tag h3</h3>
        <h4>Essa é uma tag h4</h4>
        <h5>Essa é uma tag h5</h5>
        <h6>Essa é uma tag h6</h6>
        <p>Essa é uma tag de paragrafo</p>
        <label>Essa é uma tag de rotulo</label>
        <br>
        <strong>Essa é uma tag em negrito</strong>
        <br>
        <em>Essa é uma tag para enfase</em>
        <br>
        <i>Essa é uma tag para textos em outro idioma</i>
        <blockquote>"Essa é uma tag para citações"</blockquote>
        <pre>Essa é uma tag de texto pré-formatado (geralmente usado para incluir blocos de codigo)</pre>
        <a href="http://www.google.com" target="_blank">Essa é uma tag de link</a>
        <!-- Listas -->
            <!-- <h2>Lista Ordenada</h2>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
        <h2>Lista Não Ordenada</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
        </ul>

        <hr> -->

            <!-- Containers Genericos -->
            <!-- <div>
            Essa é uma tag div
            <h1>Essa é uma tag h1</h1>
            <h2>Essa é uma tag h2</h2>
            <h3>Essa é uma tag h3</h3>
            <h4>Essa é uma tag h4</h4>
            <h5>Essa é uma tag h5</h5>
            <h6>Essa é uma tag h6</h6>
        </div>
        <div>
            Essa é outra tag div
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis varius quam, vel molestie ligula
                vestibulum ac. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Proin ultrices ullamcorper leo ac viverra. Vivamus hendrerit, sem a tristique rhoncus,
                ligula quam placerat nisl, at lobortis tellus turpis ac ligula. Morbi fringilla orci justo, sed maximus
                ligula varius nec. Nullam urna nisl, egestas non risus eget, congue interdum dui. Nunc eu finibus
                tellus. Praesent in purus nibh. Nullam eu aliquet orci.

                Mauris egestas finibus eros, at condimentum ipsum mollis quis. Pellentesque tincidunt risus et risus
                convallis, at facilisis ante pharetra. Ut eget mattis mi, mollis gravida lorem. Maecenas at viverra
                felis, at pretium eros. Proin sed tortor dolor. In nec condimentum mi. Suspendisse potenti. Cras
                sagittis elit massa. Aenean feugiat arcu leo, sit amet elementum purus lobortis ac. Praesent vitae
                bibendum metus, at blandit lectus. Donec a velit eget mi fringilla aliquet. Integer aliquet ligula ut
                magna pretium semper. Ut ultricies, neque ut interdum pulvinar, erat nisl elementum diam, at aliquam
                nisl risus quis lectus. Vivamus suscipit magna ut velit gravida condimentum ac at risus. Sed mattis
                consectetur egestas. Mauris bibendum venenatis sapien.
            </p>
        </div>
        <span>
            Essa é uma tag span
        </span>
        <hr>
        <!-- Tabelas -->
            <!-- <table>
            <thead>
                <tr>
                    <td>Linha</td>
                    <td>Site</td>
                    <td>Link</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>youtube</td>
                    <td><a href="youtube.com" target="_blank">youtube.com</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>google</td>
                    <td><a href="google.com" target="_blank">google.com</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>mozilla</td>
                    <td><a href="mozilla.com" target="_blank">mozilla.com</a></td>
                </tr>
            </tbody>
        </table>
    </main>
            </xmp></code>
        </pre>

        <footer>
            ©2022 - Curso de Programação Web - Desenvolvido por Wesley
        </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script> -->
</body>

</html>