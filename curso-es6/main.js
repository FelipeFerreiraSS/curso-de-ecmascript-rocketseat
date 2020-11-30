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

/*
const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.map(function(item) {  //função anonima mormal fica asimm↓↓↓↓↓↓↓
    return item * 2;
});
console.log(newArr);

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const newArr2 = arr.map(item => item * 2);    //Bem mais resumida e com o mesmo funcionamento
console.log(newArr2);

const teste = () => ({ nome: 'Diego' });  //se quiser colocar um nome coloque ({nome})
console.log(teste());
*/

// ************************Valores padrão
/*
function soma(a= 3, b= 6) {
    return a + b;
}

console.log(soma(1));
console.log(soma());

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());
*/

// ************************Desestruturação
/*
const usuario = {
    nome: "Felipe",
    idade: 21,
    endereco: {
        cidade: "Carmo do Paraíba",
        estado: "MG"
    },
};

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

//OU
function mostraNome({ nome, idade }) {
    console.log(nome, idade)
}
mostraNome(usuario);
*/

//********************Operadores rest/spread ...
/*
//REST (resto)
const usuario = {
    nome: "Felipe",
    idade: 21,
    empresa: "Rochetseat"
};
const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);
//OUTRA
const arr = [1, 2, 3, 4, 5]
const [ a, b, ...c ] = arr;
console.log(a);
console.log(b);
console.log(c);
//OUTRA
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 3, 4));

//SPREAD (repaça informações)

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);
//OUTRA

const usuario1 = {
    nome: "Felipe",
    idade: 21,
    empresa: "Rochetseat"
};
const usuario2 = { ...usuario1, nome: "João" };
console.log(usuario2);
*/

//************************* Templete Literals
/*
const nome = "Felipe";
const idade = 21;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
*/

//************************* Object Short Syntax
const nome = "Felipe";
const idade = 21;
const usuario = {
    nome,
    idade,
    empresa: "Rocketseat"
};

console.log(usuario);
