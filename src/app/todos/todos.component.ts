import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { CommonModule } from '@angular/common';
import { Todo } from '../home/model/todos.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  message = signal<Array<Todo>>([]);
  todosService = inject(TodosService);
  constructor() {}

  ngOnInit(): void {
    this.todosService
      .getData()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.message.set(todos);
      });
    // console.log(this.todosService.getTodoData());
  }
}
