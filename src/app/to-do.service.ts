import {Injectable} from '@angular/core';
import {ToDo} from './to-do';

@Injectable()
export class ToDoService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: ToDo[] = [];

  constructor() {
  }

  // Simulate POST /todos
  addToDo(todo: ToDo): ToDoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteToDoById(id: number): ToDoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateToDoById(id: number, values: Object = {}): ToDo {
    let todo = this.getToDoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllToDos(): ToDo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getToDoById(id: number): ToDo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo state
  toggleToDoState(todo: ToDo){
    let updatedToDo = this.updateToDoById(todo.id, {
      state: !todo.state
    });
    return updatedToDo;
  }

}
