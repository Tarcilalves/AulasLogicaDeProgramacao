/*   
Neste capítulo vimos

Dividir o código, separando por funcionalidades do sistema
Os objetos em Javascript
A quebrar funções grandes em funções menores ,com cada uma com sua responsabilidade
A função form.reset() para limpar o formulário

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Uma boa prática para quem está começando a desenvolver é sempre organizá-lo, dividindo o código por funcionalidades. 
Uma maneira de fazê-lo é criar novos arquivos JS e separar o trecho responsável pelo cálculo IMC do código relacionado ao <form>.

Outra boa prática que poderemos implementar no código é separar os blocos de código em blocos menores, em funções. 
Mostramos como um bloco grande de código é responsável por fazer muitas coisas.

No arquivo calcula-imc.js, temos um for responsável por pegar os dados dos pacientes, fazer a validação do peso e da altura e, 
depois, calcular o IMC e inserir os dados na tabela. Ou seja, temos três funcionalidades dentro do mesmo bloco.

Essas funcionalidades, como o cálculo do IMC, são necessárias em outros pontos do nosso código no form.js. 
Quando estamos adicionando um paciente na tabela por meio do formulário, atualmente, a linha fica sem o resultado 
do cálculo do IMC.

Ou seja, precisaremos calcular o IMC também no form.js, não só no código que atualmente está preso no calcula-imc.js. 
Queremos reaproveitar o código, e isto será possível se chamarmos uma função que calcule o IMC em form.js. 
A função calculaImc() receberá peso e altura como parâmetros:

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso, altura);

>>>>>>>> AJUSTANDO 

 if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2); // arredonda para duas casas decimais
}

Criando Funções

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 if(pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
}


function calculaImc(peso,Altura){
    var imc=0;
    imc = peso/ (altura * altura);
    return inc.toFixed(2);
}

Com este ajuste consegumos ir no código do JS form e ImcTd e finalizar o código para clacular o imc, usando o mesma 
função. 

var imcTd = document.createElement("td");
imcTd.textContent = calculaImc(peso,altura);
pacienteTr.appendChild(imcTd);

Criando um objeto paciente
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Vamos quebrar a função Form e funções menores

Esse código está pegando todos os valores e extraindo para variáveis. 
O nome, peso, altura e gordura são características do paciente. 
Logo, eles pertencem ao mesmo paciente e poderiam ser representados pela mesma coisa. 
Quando falamos em representar um paciente, falamos de objetos. 
Nas linguagens de programação, objetos representam coisas do mundo real, ou mesmo da programação.
 
// Extraindo informações do paciente 
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

>> Tarnsformando 
Ao criarmos um paciente, sabemos que ele deve ter um nome, peso, altura e gordura. 
Então, agruparemos todas as características em uma mesma variável criando um objeto em JavaScript usando chaves ({}):

function obtemPacienteDoFormulario(form) {

    var paciente = {

    }

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
}

Dentro das chaves, passamos as propriedades do objeto, que nada mais são que as suas características. 
Para criar uma propriedade, passamos o seu nome e o seu valor, mas não com um igual e sim com dois pontos. 
Por exemplo, a propriedade nome:

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}

Assim, atribuímos às propriedades os valores extraídos do formulário e, no fim, a função retornará o objeto paciente.

Na parte de cima do arquivo, vamos declarar a variável paciente.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Outra responsabilidade a ser extraída é a criação da tr e das tds do paciente. Atualmente o trecho do código do form.js está assim:

//cria a tr e a td do paciente
var pacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso,altura);

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

Na parte de baixo do arquivo, criaremos a função montaTr, que receberá um paciente como parâmetro e, como o próprio nome indica, montará a tr com os dados:

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    return pacienteTr;
}

Em seguida, devemos preenchê-la com as tds do paciente. Se movermos o código referente aos dados do paciente para dentro da função, ela ficaria mais legível:

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

As tags td serão criadas, e então preenchidas com paciente.nome, paciente.peso, paciente.altura, paciente.gordura e já não precisaremos calcular o IMC, pois o cálculo foi feito em paciente.imc.

Por fim, chamaremos a função montaTr quando o botão for clicado. A função ficará dentro da variável pacienteTr:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    // Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});

Ao preenchermos os dados do formulário, veremos que eles continuarão sendo adicionados à tabela com o código mais legível.

******  Adicionando classes aos elementos  ********

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

 função montaTr para criar um paciente com as classes corretas. Já sabemos como adicionar uma classe a um elemento, 
 a seguir, adicionaremos a classe paciente na tr. Para isso, usaremos o método add():

 Adicionar as classes nas tds, por exemplo, info-nome e info-peso:

 function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;

Temos que fazer esse código para todas as tds, criar o elemento, incluir a classe e o valor. Observe que por termos separado 
as funções, já sabemos onde fazer as alterações.

>>>>>> Função para criar e montar uma td <<<<<<<<<


Quando identificamos códigos repetidos, temos a opção de exportá-los para uma função, que será responsável por eles. 
A função montaTd criará a td e adicionará a classe juntamente com o dado. Como a classe e o dado variam de acordo com a td,
iremos recebê-los por parâmetro na função:

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

    return td;
}

>>>>>>  Limpando o formulário após adicionar o paciente  <<<<<<

É possível "enxugar" ainda mais o nosso código, adicionando o montaTd diretamente no appendChild().

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


>>>>> Limpando a tabela <<<<<<<<<<<<<

É recomendável limpá-los para não corrermos o risco de adicionarmos pacientes iguais. 
Poderemos limpar os campos do formulário chamando a função reset() depois de inserirmos o paciente na tabela.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


    form.reset();
});







*/