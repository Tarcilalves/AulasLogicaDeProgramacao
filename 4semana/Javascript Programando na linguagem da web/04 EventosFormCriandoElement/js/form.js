var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente     
    var paciente = obtemPacienteDoFormulario(form);
    // Cria a TR e a TD do paciente 
    var pacienteTr = montaTr(paciente);
    // mensagem erro
    var erro = validaPaciente(paciente);
    

    // Valida paciente
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;                     
    // só vai adicionar na tabela se passar por este if
    }

    // Adicionando o paciente na Tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    // Limpando os campos
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro"); // limpar as mensagens de erro
    mensagensErro.innerHTML ="";

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";  // Permite controlar um item do HTML - com as "" vazias não vai aparecer nada nas li
    //for(var i = 0; i< erros.length; i++){
      //  var erro = erros[i];
    erros.forEach(function(){
        var li = document.createElement("li");
        li.textContent = erro;
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
    if(paciente.nome.length === 0) erros.push("O nome não pode ser branco");
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if(!validaPaciente(paciente.altura)) erros.push("Altura é inválido"); 
    if(paciente.gordura.length == 0) erros.push("A % de gordura do paciente não pode ser branco"); 
    if(paciente.peso.length == 0) erros.push("O peso do paciente não pode ser branco"); 
    if(paciente.altura.length == 0) erros.push("A altura do paciente não pode ser branco"); 
    

    return erros;
}
