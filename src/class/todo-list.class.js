import { Todo } from './index';

export class TodoList {
	constructor() {
		// this.todos = [];
		this.cargarLocalStorage();
	}

	nuevoTodo(todo) {
		this.todos.push(todo);
		this.guardarLocalStorage();
	}

	eliminarTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id != id);
		this.guardarLocalStorage();
	}

	marcarCompletado(id) {
		for (const todo of this.todos) {
			// console.log(id, todo.id);
			if (todo.id == id) {
				todo.completado = !todo.completado;
				this.guardarLocalStorage();
				break;
			}
		}
	}

	eliminarCompletados() {
		this.todos = this.todos.filter((todo) => !todo.completado);
		this.guardarLocalStorage();
	}

	guardarLocalStorage() {
		localStorage.setItem('tareas', JSON.stringify(this.todos));
	}

	cargarLocalStorage() {
		// if (localStorage.getItem('tareas')) {
		// 	this.todos = JSON.parse(localStorage.getItem('tareas'));
		// 	console.log('CargarLocal: ', this.todos);
		// } else {
		// 	this.todos = [];
		// }

		this.todos = localStorage.getItem('tareas')
			? JSON.parse(localStorage.getItem('tareas'))
			: [];
		// console.log('LocalStorage: ', this.todos);

		this.todos = this.todos.map((obj) => Todo.fromJson(obj));
	}
}
