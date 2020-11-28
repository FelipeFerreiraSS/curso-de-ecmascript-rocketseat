"use strict";

// ****************Class 

/*
//classes
class TodoList {
    constructor() {    // Inicia variaveis
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}
*/
//Metodos estaticos

/*
//metodo um
class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
*/

/*
//metodo dois
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));
*/
//******************* Const & Let

/*
const a = 1;  //não pode mudar o valor

const usuario = { nome: 'Felipe'};  //Mutação
usuario.nome = 'Cleiton';
console.log(usuario);

//função de escopo
function teste(x) {
    let y = 2;
    if (x > 5) {
        let y = 4;

        console.log(x, y);
    }
}
teste(10);
*/
//*******************Operação em Array

/*
const arr = [1, 2, 3, 4, 5, 6, 7];

//Map
const newArr = arr.map(function(item, index) {  //index== posição
    return item * index;  //pode colocar index para o numero da posição ou outro valor
});
console.log(newArr);

//Reduce
const sum = arr.reduce(function(total, next) {
    return total + next     //o numero mais o proximo
});
console.log(sum);

//filter (Filtra dentro do array)
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

//find  Encontra um valor dentro do array
const find = arr.find(function(item) {
    return item === 4;
});
console.log(find);
*/
// ***********************Arrow Functions
var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.map(function (item) {
  //função anonima mormal fica asimm↓↓↓↓↓↓↓
  return item * 2;
});
console.log(newArr); //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var newArr2 = arr.map(function (item) {
  return item * 2;
}); //Bem mais resumida e com o mesmo funcionamento

console.log(newArr2);

var teste = function teste() {
  return {
    nome: 'Diego'
  };
}; //se quiser colocar um nome coloque ({nome})


console.log(teste());
