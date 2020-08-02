import './styles.css';

import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tareas = todoList.todos;

todoList.todos.forEach(crearTodoHtml);

// console.log('Todos: ', todoList.todos);
