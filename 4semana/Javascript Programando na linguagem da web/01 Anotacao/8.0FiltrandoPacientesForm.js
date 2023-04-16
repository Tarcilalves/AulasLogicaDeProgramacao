/*
Neste capítulo aprendemos:

O novo evento de input
O truque de deixar invisível adicionando uma classe com display:none
Como realizar uma busca, escondendo todos os elementos e mostrando apenas aqueles que nos interessam
Como buscar por apenas um pedaço de uma palavra com as Expressões Regulares em Javascript



Começaremos implementando um campo de busca na tabela, adicionando uma tag <input> no index.html. 
Criaremos uma label com o texto Filtre:. Dentro da tag, teremos também placeholder, com o texto Digite o nome do paciente.

<section class="container">
    <h2>Meus pacientes</h2>
    <label for="filtrar-tabela">Filtre:</label>
    <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
    <table>
        <thead>
          <tr>
             <th>Nome</th>
             <th>Peso(kg)</th>
             <th>Altura(m)</th>
             <th>Gordura Corporal(%)</th>
             <th>IMC</th>
    </tr>
</thead>


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

02
Implementando a lógica de filtragem

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
    }
});

Nosso próximo objetivo será esconder todos elementos diferentes do valor do campo de texto (this.value) e mostrar os que
forem iguais. Para conseguirmos esconder e mostrar, usaremos o "truque" do fadeOut no index.css:

.fadeOut{
    opacity: 0;
    transition: 0.5s;
}

Faremos o mesmo para esconder os pacientes, se (if) o nome for diferente do conteúdo de texto, adicionaremos uma classe. 
Caso não seja, isto é, se o nome for igual ao que foi digitado, removemos a classe. Faremos isso no filtra.js:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        if (nome != this.value) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
});

Se testarmos no browser digitando Douglas, somente este paciente será exibido.

Porém, ao apagarmos o que foi digitado, a tabela com todos os pacientes não voltam a ser exibidos. Isso porque todos 
os pacientes estão com a classe invisivel, mas só deveríamos colocá-la quando houvesse algum conteúdo digitado no campo...

Criaremos um if para que a classe invisivel seja adicionada apenas quando houver algo digitado. Veremos se há algo 
digitado ou não por meio do seu length - se ele for 0, significa que o campo está em branco, e se for maior que 0,
 significará que há algo digitado:

 Com algo digitado, queremos que o for seja executado:
 No caso de não haver nada digitado, percorreremos todos os pacientes e removeremos a classe com um segundo for:


 var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

Estamos com uma busca funcional, conseguimos filtrar a lista pelo nome do paciente, e quando apagamos o termo pesquisado,
 a lista da tabela é exibida completamente. 

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

03 
Filtrando com expressão regular


Refinar a filtragem:

Para tornar a nossa filtragem melhor, seria interessante que, ao digitarmos uma letra no campo de busca, todos os nomes 
com essa letra fossem listados. Por exemplo, ao digitarmos a letra "P", todos os pacientes que começassem com essa letra 
seriam exibidos. Como "Pedro", "Paulo" e "Pablo".

Conforme formos digitando as letras, a filtragem seria atualizada e a busca ficaria mais interativa.

Para que isso aconteça, é preciso compararmos letra por letra pelos termos buscados com os nomes cadastrados na lista. 
Seria trabalhoso fazer isso manualmente, mas o JavaScript, além de outras linguagens de programação, já possuem uma solução 
para a busca de texto: expressões regulares.

As expressões regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings, facilitando quando o termo 
for maior. Pode ser uma busca simples, como no nosso caso, em que queremos identificar quais nomes contêm determinadas 
letras; ou casos complexos, se queremos pesquisar se o parágrafo contém a palavra "nome", por exemplo, é como quando os 
editores de texto buscam por uma palavra usando o comando "CTRL + F".

>>>> Criando expressões regulares no JavaScript

É bastante simples criar expressões regulares. Criaremos uma variável, que no caso chamaremos expressao, e em seguida 
colocaremos uma expressão regular dentro dela. Vamos gerar um objeto especial do JS, adicionando new e o nome RegExp():

var expressao = new RegExp();

Com a nova linha o trecho ficará da seguinte maneira:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp();
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }


Nós poderemos passar>>>dois parâmetros<<<< para o *objeto*, sendo o primeiro o texto que queremos buscar, no caso, o termo digitado
no campo de busca (this.value), e o segundo parâmetro será *referente às características* dos termos que devem ser buscados.
É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas. 
Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro, para indicarmos
a opção case insensitive:

O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão regular, o que deve ser buscado) 
e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque). 
Por exemplo, podemos definir que não queremos que haja distinção entre letras maiúsculas e minúsculas, através da flag i.

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
}


Porém, como utilizamos a expressão regular para buscar um texto específico na tabela? Em vez de compararmos com o nome inteiro 
do paciente (como estávamos fazendo), vamos pedir para a expressão regular verificar se um pedaço do nome do paciente possui as 
letras digitadas no campo de busca. Para isso, a expressão regular tem o método test(), com a qual passaremos o que queremos testar:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 
            if (expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

Esse teste irá retornar verdadeiro caso o nome contenha a expressão, ou falso caso não contenha. Como estamos testando se o 
nome não contém a expressão (por isso adicionaremos a classe invisivel), utilizaremos novamente o operador de negação (!). 
Logo, se o teste falhar, adicionaremos a classe; se não, ela será removida:

Agora a filtragem será feita a cada letra, deixando a busca mais dinâmica.


var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});




*/