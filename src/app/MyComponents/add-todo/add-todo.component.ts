import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title: string;
  desc: string;
  OnSubmit() {
    const todo = {
      sno: 10,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoAdd.emit(todo)
  }
}
