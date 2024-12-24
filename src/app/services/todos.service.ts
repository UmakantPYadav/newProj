// import { Injectable } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../home/model/todos.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  url = 'https://jsonplaceholder.typicode.com/todos';

  todos: Array<Todo> = [
    {
      title: 'groceries',
      id: 0,
      userid: 0,
      completed: false,
    },
    {
      title: 'Food',
      id: 1,
      userid: 1,
      completed: true,
    },
  ];


httpClient = inject(HttpClient);

  getData() {
    return this.httpClient.get<Array<Todo>>(this.url);
  }

  getTodoData(){
    return this.todos;
  }
}
