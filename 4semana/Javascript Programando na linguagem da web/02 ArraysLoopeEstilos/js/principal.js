/* Nesta etapa vamos criar uma validação para o resto da tabela - Usaremos um loop


*/

//IMC = peso / altura x altura; = alert(78 / (1.71 * 1.71));

//document.querySelector()Só trás somente um elemento - para trazer varios elemento tem que usar uma função que é similar a ela 
//document.querySelectorAll()
//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente"); // Retorna uma array dos pacientes, mostrando todas as tr's
//Precisamos passar por todos os pacientes e para cada paciente executar o código abaixo:
for(var i = 0; i < pacientes.length; i++){ // 3 condições - 1° declarar a variavel / 2° condição / 3° incrementação da variável
//lembrado que .lenght é o tamanho da lista
// console.log(pacientes[i]); - invés de trocar em todo código que tem paciente por pacientes[i] - faremos um truque assim:
//declarando a variavel dentro do for
var paciente=pacientes[i]; //OU seja, para toda vez que que o progama passar pelo for a variável paciente que vai extrair os valores
// das variáveis peso e altura, sera nada mais que um item desta lista.

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;
// adicionando estilos - vermelho para mensagem "inválido"
if (peso <= 0 || peso >= 1000) {  
    console.log("Peso inválido!");  
    pesoEhValido = false;
    //paciente.style.color="white";
    //paciente.style.background="red";
    //paciente.style.backgroundColor="lightcoral"; 
    //Mudando o estilo com boas práticas - mudando o estilo pelo css
    //Acessando uma classe uma classe
    paciente.classList.add("paciente-invalido");  // classList - retorna todas as classes daquele objeto e também retorna o método .dd
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválido" 
    paciente.classList.add("paciente-invalido"); 
}
 if(alturaEhValida && pesoEhValido){ 
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
 }
 
}

/*
Rômulo deseja que todos os H2's de sua página tenham a classe "titulo", que modifica a fonte dos H2's e deixa eles com um destaque específico.

Qual dos códigos abaixo implementa uma solução em Javascript para que todos os <h2> da página ganhem a classe "titulo"?

var titulos = document.querySelectorAll("h2");

for(var i = 0 ; i <  titulos.length ; i++){
    var titulo = titulos[i];
    titulo.classList.add("titulo");
}

A função responsável por adicionar uma classe é a função .add(), que recebe como parâmetro o nome da classe que queremos adicionar!

Só devemos lembrar de chamar esta função depois de acessarmos a propriedade .classList, que contêm as classes do HTML selecionado.

*/


