/*
Neste capítulo implementamos a criação de usuários a partir de um formulário, e com isso aprendemos:

A diferença entre as funções nomeadas e as funções anônimas
A escutar eventos do browser com a função addEventListener()
Que a função criadora de elementos é .createElement()
A pegar o valor de um input por meio da propriedade .value
A acessar os input de um form por meio da propriedade .name
A adicionar elementos na página e dentro de outros elementos com a função appendChild()





Adicionando novos pascientes 

A maniera mais simplista seria mexer no código replicando um pedaço do código e alterando os dados para adicionar novos pascientes:
Alterar o html na mão, não deixa as coisas práticas. Para resolver, iremos adicionar um formulário e a cliente na própria página,
conseguirá adicionar o pasciente novo.


Assim que o formulário for preenchido, queremos que o botão adicionar:

<button id="adicionar-paciente" class="botao bto-principal">Adicionar</button>

Envie o formulário para ser adicionado na tabela.

******** ENTENDENDO O JAVASCRIPT ***********

Quando o usuário interage de alguma forma com a página, como no exemplo, clicar no botão 'adicionar', estas interações no JS chamamos de EVENTOS.
Para está ação temos que pegar o elemento no JS e escutar este evento do clique, quando houver a interação com o elemneto.  

>>> Vamos colocar um escutador de evento no título

titulo.EddEventListener() >> ele adiciona um escutador de evento

Ele vai ficar escutando a tag <h1>  e dentro do () vamos adicionar o evento de clique. 

titulo.EddEventListener("click") 

Assim, que o usuário clicar quero que aconteça algo. Para que isto aconteça vamos usar uma função. 

titulo.addEventListener("click" , mostraMensagem);  adicionamos a função
functio mostraMensagem(){
    console.log("Olá fui clicado!")
}


>>>  Função nomeada <<<

O Javascript possuí dois tipos de funções, as funções anônimas e as funções nomeadas.
As funções nomeadas, como o próprio nome diz, são as funções que levam um nome em sua criação e que podem ser 
invocadas posteriormente, como a função mostraMensagem:

function mostraMensagem(){
    console.log("Fui clicado");
}

>>> Função anônima <<<

Já as funções anônimas, são funções que não tem nome e só são chamadas no contexto aonde foram declaradas. 
Elas são muito usadas em conjunto com a função addEventListener(), onde normalmente a ação que desejamos
chamar só deve ser chamada naquele local.

titulo.addEventListener("click", function(){
    console.log("Fui clicado");
});




*********  Vamos adicionar uma mensagem no botão  ***********

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    console.log("Fui clicado!");
});

Ele recarrega a página ao clicar no botão, porém a mensagem aparece é que é muito rápido e como ele recarrega limpa tudo.
Teste se o click está funcionando no botão.

*** Se você testou o código acima, deve reparar que a mensagem do console.log não surge no console. Ou se aparece, 
ela apenas pisca e some rapidamente. Como estamos submetendo um <form> ,por padrão a página é recarregada, logo devemos 
impedir que isto ocorra. Adicione o parâmetro event na função anônima e dentro dela chame o event.preventDefault():

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Fui clicado!");
});

Agora sim ao clicar vemos a mensagem "Fui clicado" surgir no console.

O comportamento padrão de um form, quando clicamos em um button ou em um input submit, que está dentro dele, 
é enviar os dados e recarregar a página. Por isso, a página de Jéssica sempre recarrega quando o usuário clica no botão.

Para evitarmos este comportamento, devemos chamar a função do Javascript que previne o comportamento padrão de certos elementos: 
event.preventDefault.

Adicionaremos event.preventDefault dentro da função anônima chamada pelo evento click da função:
botao.addEventListener("click", function(event){
    event.preventDefault();

    console.log(form.tarefa.value);
    //Código para adicionar na lista de tarefas
});

Observe que passamos event como parâmetro da função. Com isso, incluímos um parâmetro que está sempre presente nas funções executadas 
quando ocorre um evento.

>> Como nem sempre event é usado, às vezes, é desnecessário passá-lo para a função. Mas neste caso, é ele quem contém a função .preventDefault(), 
na qual estamos interessados, logo, precisaremos passá-lo como parâmetro.


>>> ADICIONANDO UM NOVO PACIENTE <<<

* Capturar os dados do Form para adicionar na página

1° é trazer o Form para o JS

Quando selecionamos o forme com .querySelector, tem acesso aos inputs e todo imput tem um NAME, podemos usar assim com a propriedade form.

 var nome = form.name.value;
 var peso = form.peso.value;
 var altura = fotm.altura.value;
 var gordura = form.gordura.value;

Para buscar o valor digitado no campo usamos o .value. 

Como já conseguimos capturar os dados, iremos criar uma nova linha na tabela no html usando o JS. Para isso usaremos um função 
chamada .createElement -> cria um elemento. 
Se queremos criar um paciente, então queremos criar uma <tr>

A função responsável por criar elementos no Javascript é a createElement().Com ela passamos o nome da tag que queremos criar 
e ela nos retorna um objeto HTML que pode ser alterado com as propriedades do Javascript, como a .textContent e a .classList.

 var pacienteTr = document.createElement("tr"); 

 Agora temos que criar cinco <td>

 representando os datos que estamos solicitando para achr o IMC
 	<tr class="paciente" >                       
		<td class="info-nome">Tatiana</td>       var nomeTd = document.createElement("td");
		<td class="info-peso">46</td>            var pesoTd = document.createElement("td");
		<td class="info-altura">1.55</td>        var alturaTd = document.createElement("td");
		<td class="info-gordura">19</td>         var gorduraTd = document.createElement("td");
		<td class="info-imc">0</td>              var imcTd = document.createElement("td");
	</tr>

Ajustar os dados para uma estrutura válida, .usando o textContent e colocalas dentro de uma Tr

 nomeTd.textContent = nome;
 pesoTd.textContent = peso;
 alturaTd.textContent = altura;
 gorduraTd.textContent = gordura;
 imcTd.textContent = imc;

 Para colocar dentro da Tr tem uma função chamada .appendChild

 pacienteTr.appendChild 

 A tr é pai e as td flhas da tr, colocando um elemento dentro do outro. 

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

****** Colocar na Tabela os dados ********

Vamos usar a função .appendChild também para colocar tabela








 













*/