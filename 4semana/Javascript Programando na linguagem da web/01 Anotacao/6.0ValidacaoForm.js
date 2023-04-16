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



*/