import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  OnClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('OnClick has been trigerred');
  }
}
