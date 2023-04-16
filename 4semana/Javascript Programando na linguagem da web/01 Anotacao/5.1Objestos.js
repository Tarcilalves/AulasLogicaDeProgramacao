/*

Utilizamos objetos no Javascript como na maioria das linguagens de programação orientadas, 
aonde os objetos podemos compará-los com objetos da vida real. Um objeto é uma entidade independente, 
com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. 
Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. 
Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

Para declaramos um objeto, utilizamos a sintaxe com {}, exemplo:
var xicara = {};

Só que de nada nos serve um objeto vazio, então podemos dar características a este objeto através de suas propriedades:

var xicara = {
    cor: "azul",
    peso: 125,
    tipo: "chá"
};

As propriedades de um objeto são separadas por um : do seu valor e utilizamos uma vírgula ao final de cada propriedade para separá-la 
da próxima. Podemos acessar as propriedades de um objeto Javascript como abaixo:

xicara.cor // azul
xicara.peso // 125
xicara.tipo // chá
xicara.modelo // undefined, este objeto não possui a propriedade modelo




*/