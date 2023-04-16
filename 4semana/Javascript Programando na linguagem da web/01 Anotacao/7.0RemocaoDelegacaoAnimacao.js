/*
Neste capítulo aprendemos:

O novo evento de dblclick
Como os eventos propagam atráves da página
A delegação de eventos
Como animar uma remoção com o setTimeout





adicionar novas funcionalidades
editar e remover, para adicioná-lo novamente

Ela pode ser feita através de um ícone, ou para ser mais simples, um duplo clique! 
Ao clicarmos duas vezes em um paciente, o mesmo é removido.

 criar um novo arquivo na pasta js, o remover-paciente.js. 

 Primeiramente, devemos selecionar as linhas. Todas elas possuem a classe paciente, portanto iremos selecioná-las:

var pacientes = document.querySelectorAll(".paciente");

Agora, para cada linha e paciente, faremos algo:

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {

});


Removendo um elemento do HTML com JavaScript

A função do JavaScript responsável por remover um elemento do HTML é a remove(). 
Então temos que chamá-la no paciente que foi clicado.

Quem será clicado? O dono do evento, certo? Este é que sofrerá a ação de duplo clique e executará a função. 
Para acessar o dono do evento, em que o evento está atrelado, utilizaremos uma palavra reservada do JavaScript chamada this:

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});




O this é uma palavra de contexto ligada com quem acionou o evento, a quem o evento está atrelado. 
Como o evento está atrelado ao paciente, o this fará referência a ele.

Ao testarmos na página, e darmos um duplo clique em um paciente nativo, o mesmo é removido! Então conseguimos implementar 
a remoção de um paciente de um jeito bem fácil.
A implementação tem um pequeno defeito: ao adicionarmos um paciente pelo formulário, não conseguimos removê-lo. 
Isso porque o novo paciente não estava na página no momento em que o remover-paciente.js foi carregado 
(lembrando que o navegador abre a página e vai lendo o seu HTML, carregando os nossos scripts logo depois).

Então, o script seleciona somente os pacientes que já estão na página. Ao adicionar um ou mais pacientes, 
eles não estão escutando o evento! No momento em que um paciente for adicionado, deveríamos colocá-lo para ouvir o 
evento e executar o mesmo código, mas aí estaríamos duplicando código, que já sabemos não ser uma boa prática.

Veremos a seguir um outro jeito de removermos os pacientes nativos e aqueles que forem sendo adicionados depois da 
página ser carregada.



>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

02
Delegando eventos

Dentro da função, perguntamos ao pai qual filho recebeu o clique, pois é ele que será removido. 
Desta vez não podemos utilizar o this, já que o dono do evento é a tabela, logo, ela acabará sendo removida. 
Para descobrirmos qual filho foi clicado, utilizaremos o event como parâmetro na função:

Ele irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target. Enquanto o this se refere ao dono do evento, 
o event.target será quem sofreu propriamente o evento. O próximo passo será remover o elemento após o duplo clique:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.remove();
});

Mas se testarmos, veremos que isso quase funciona. Ao clicarmos em algum campo da tabela, apenas o <td> clicado será removido. 
No entanto, queremos remover a linha completa, ou seja, a tag <tr>, pai do <td>.

Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. A seguir selecionaremos quem foi clicado 
e removeremos o seu pai, uma tag <tr>:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

03
Animando a remoção do paciente

Efeito visual no css - para que a tabela excluida desapareça aos poucos





*/