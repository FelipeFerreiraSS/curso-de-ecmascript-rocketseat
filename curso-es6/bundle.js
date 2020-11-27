"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
//metodo dois
var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
