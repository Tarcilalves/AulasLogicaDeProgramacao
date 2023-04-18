/*
Neste capítulo vimos:

Mais organização de código, exportando as funções de validação.
O operador de negação NOT (!)
Como validar um formulário
A função push para colocar elementos dentro de um array
A propriedade innerHTML dos elementos, que foi usada para apagar os itens da <ul>
O método forEach para percorrer arrays





*************  01 Validando os dados do formulário  ************

*************  02 Exibindo mensagens de erro ************

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return "";
    }else {
        return "O peso é inválido";
    }
}


function validaPaciente(paciente){
    var erros = []; // validar diversos erros
    if(!validaPeso(paciente.peso))
        erros.push("Peso é inválido")
    }
    if(!validaPaciente(paciente.altura)){
    erros.push("Altura é inválido")
    

    return erros;
}

simplificado 

function validaPaciente(paciente) {
    var erros = []; // validar diversos erros
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if(!validaPaciente(paciente.altura)) erros.push("Altura é inválido");  

    return erros;
}

*************** 03 Validando o restante dos campos  ****************

<span id="mensagem-erro"></span>

objetivo é adicionar diversas mensagens de erros, uma para cada erro que surgir para o array.
Será necessário criar uma <li> para cada erro e, depois, adicioná-la na <ul>.

>>>>>  Função fotEach() <<<<<

 Em JavaScript, todo array possui a função forEach. Passamos para ela uma função por parâmetro, 
 e nessa função fazemos o que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna.
 Todo array possui a função forEach(), em JavaScript. Passamos para ela uma função por parâmetro, e nessa função fazemos o 
 que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna:

 nomes.forEach(function(nome) {
    console.log(nome + " é instrutor da Alura");
})

>>>>>  A propriedade innerHTML  <<<<<

Não, innerHTML é uma propriedade, não uma função, então ela recebe o novo conteúdo, ou seja, utilizamos um sinal de igual (=):

document.querySelector("#alura").innerHTML = "Novo texto"

Com a propriedade innerHTML, podemos editar obter o conteúdo HTML (HTML interno) de um elemento.
Para editar o HTML interno, como o innerHTML é uma propriedade, utilizamos um sinal de igual (=). Fazemos:

ObjetoDeUmElementoHTML.innerHTML = "Novo conteúdo"

E para obter o HTML interno, fazemos:

ObjetoDeUmElementoHTML.innerHTML

O seu retorno será todo o conteúdo HTML, tanto tags, atributos, classes, etc, no formato de uma String.

*************************************************************************************************************************************************
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente     
    var paciente = obtemPacienteDoFormulario(form);
        // mensagem erro
    var erros = validaPaciente(paciente);
    // Valida paciente
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;                     
    // só vai adicionar na tabela se passar por este if
    }
    adicionaPacienteNaTabela(paciente);    
    // Limpando os campos
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro"); // limpar as mensagens de erro
    mensagensErro.innerHTML ="";

});

function adicionaPacienteNaTabela(paciente){
    // Cria a TR e a TD do paciente 
    var pacienteTr = montaTr(paciente);
    // Adicionando o paciente na Tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";  
    erros.forEach(function(){
        var li = document.createElement("li");
        li.textContent = erros;
        ul.appendChild(li); 
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}
//Adicionando classes aos elementos
function montaTr(paciente) {
    //Cria TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    // retorna a TR
    return pacienteTr;  
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {
    var erros = []; // validar diversos erros
    if (paciente.nome && paciente.nome.length === 0) {
        erros.push("O nome não pode ser branco");
    }
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválido"); 
    if(paciente.gordura.length == 0) erros.push("A % de gordura do paciente não pode ser branco"); 
    if(paciente.peso.length == 0) erros.push("O peso do paciente não pode ser branco"); 
    if(paciente.altura.length == 0) erros.push("A altura do paciente não pode ser branco"); 
    

    return erros;
}


*/