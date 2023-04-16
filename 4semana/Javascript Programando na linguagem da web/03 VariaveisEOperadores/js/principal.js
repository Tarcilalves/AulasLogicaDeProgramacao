/* utilizar a função querySelector na própria <tr>, afinal a função querySelector() é especialista em buscar, 
seja na página inteira quando utilizamos-a buscando no document (document.querySelector) 
ou quando queremos fazer uma busca em elemento específico que foi pré selecionado  

>>>>  função seletora a propriedade textContent, busca o que está escrito dentro da tag html <<<<

var salada = pratoDoDia.querySelector(".salada").textContent; 
var principal = pratoDoDia.querySelector(".principal").textContent;
var acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;

console.log("Prato do dia!");
console.log(salada);
console.log(principal);
console.log(acompanhamento);


*/

//IMC = peso / altura x altura; = alert(78 / (1.71 * 1.71));

// Vamos selecionar o primeiro paciente 
var paciente = document.querySelector("#primeiro-paciente");
/*  Iremos buscar o que está dentro <td>, nosso interesse é no peso e na altura do Paulo.*/
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdPeso); // tr que tem o peso
console.log(peso); // obter 100
console.log(altura); // obter 2.00

//var imc = peso / altura * altura; // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25
//O resultado esperado para a variável imc é 25, porém, o console exibirá 100 como resultado.
//console.log(imc);

// Refazendo a conta IMC

var tdImc = paciente.querySelector(".info-imc");
//var imc = peso / (altura * altura);
//tdImc.textContent = imc; // o IMC na tabela será 25 
// CRIAR UMA VALIDAÇÃO - só calcular o imc do paciente se os valores forem validos
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {  // ||, duas barras verticais que recebem o nome de pipes:  - É um operador para juntar as duas condições
    console.log("Peso inválido!");  //  representa a palavra "ou "
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido" // adicionando uma mensagem
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválido" // adicionando uma mensagem
}
 if(alturaEhValida && pesoEhValido){  //  operador lógico e o &&, usado com o significado de E na condição.
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
 }
 

