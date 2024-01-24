import { Component } from '@angular/core';
import { Todo } from '../../Todos';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent,AddTodoComponent,NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  localItem:string | null;
  todos: Todo[];
  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem('todos');
  
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      this.todos = [];
    }
  }
  title = 'First Project';
  todoDelete(todo: Todo) {
    const index: number = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  todoAdd(todo:Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
