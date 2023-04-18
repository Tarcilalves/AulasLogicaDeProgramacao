var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista" ;

var pacientes = document.querySelectorAll(".paciente");
var numeroPacientes = pacientes.comprimento;

for(var i = 0; i < numeroPacientes ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura =tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){ // Usar operador de negação
        console.log("Peso inválido");
        pesoEhValido = false;

        tdImc.textContent = "Peso inválido!"; 
        paciente.classList.add("paciente-invalido");     
    }

    if(!alturaEhValida){
        console.log("Altura inválida");
        alturaEhValida = false;

        tdImc.textContent = "Altura inválida!"; 
        paciente.classList.add("paciente-invalido");      
    }
       
        if(pesoEhValido && alturaEhValida){
            var imc = calculaImc(peso * altura);
            tdImc.textContent = imc;
        }
        
}     

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00 && altura.toString().indexOf(',') === -1) {
        return true;
    } else {
        return false;
    }
}

// Definição da função calculaImc()
function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
  
  // Definição da função calculaImcParaTodosPacientes()
  function calculaImcParaTodosPacientes() {
    var pacientes = document.querySelectorAll('.paciente');
  
    pacientes.forEach(function(paciente) {
      var peso = paciente.querySelector('.info-peso').textContent;
      var altura = paciente.querySelector('.info-altura').textContent;
      var tdImc = paciente.querySelector('.info-imc');
  
      var pesoEhValido = validaPeso(peso); // true ou false
      var alturaEhValida = validaAltura(altura);
  
      if (!pesoEhValido) { // Usar operador de negação
        console.log('Peso inválido');
        pesoEhValido = false;
  
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
      }
  
      if (!alturaEhValida) {
        console.log('Altura inválida');
        alturaEhValida = false;
  
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
      }
  
      if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
      }
    });
  }
  
  // Chamada da função calculaImcParaTodosPacientes()
  calculaImcParaTodosPacientes();
  