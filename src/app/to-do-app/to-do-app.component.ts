import { Component, OnInit } from '@angular/core';

// Import ToDo
import {ToDoService} from '../to-do.service';
import {ToDo} from '../to-do';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css'],
  providers: [ToDoService]
})

export class ToDoAppComponent implements OnInit {

  newToDo: ToDo = new ToDo();

  constructor(private todoService: ToDoService) {

  }

  ngOnInit() {
  }

  /**
   * Toggle State
   * @param todo
   */
  toggleToDoState(todo) {
    this.todoService.toggleToDoState(todo);
  }

  /**
   * Adds a single to do
   * @param todo
   */
  addToDo() {
    this.todoService.addToDo(this.newToDo);
    this.newToDo = new ToDo();
  }

  /**
   * Removes a single to do
   * @param todo
   */
  removeToDo(todo) {
    this.todoService.deleteToDoById(todo.id);
  }

	/**
	 * Returns all the todos
	 */
  get todos() {
    return this.todoService.getAllToDos();
  }

}
