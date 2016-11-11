import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {ToDo} from './to-do';
import {ToDoService} from './to-do.service';

describe('ToDo Service', () => {

  beforeEachProviders(() => [ToDoService]);

  describe('#getAllToDos()', () => {

    it('should return an empty array by default', inject([ToDoService], (service: ToDoService) => {
      expect(service.getAllToDos()).toEqual([]);
    }));

    it('should return all todos', inject([ToDoService], (service: ToDoService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllToDos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([ToDoService], (service: ToDoService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getToDoById(1)).toEqual(todo1);
      expect(service.getToDoById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteToDoById(id)', () => {

    it('should remove todo with the corresponding id', inject([ToDoService], (service: ToDoService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllToDos()).toEqual([todo1, todo2]);
      service.deleteToDoById(1);
      expect(service.getAllToDos()).toEqual([todo2]);
      service.deleteToDoById(2);
      expect(service.getAllToDos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([ToDoService], (service: ToDoService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllToDos()).toEqual([todo1, todo2]);
      service.deleteToDoById(3);
      expect(service.getAllToDos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateToDoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([ToDoService], (service: ToDoService) => {
      let todo = new ToDo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedToDo = service.updateToDoById(1, {
        title: 'new title'
      });
      expect(updatedToDo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([ToDoService], (service: ToDoService) => {
      let todo = new ToDo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedToDo = service.updateToDoById(2, {
        title: 'new title'
      });
      expect(updatedToDo).toEqual(null);
    }));

  });

  describe('#toggleToDoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([ToDoService], (service: ToDoService) => {
      let todo = new ToDo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedToDo = service.toggleToDoComplete(todo);
      expect(updatedToDo.state).toEqual(true);
      service.toggleToDoComplete(todo);
      expect(updatedToDo.state).toEqual(false);
    }));

  });

});
