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
