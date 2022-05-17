import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-list-manager',
  template: `
    <div>
      <h3>Todo list:</h3>
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-todo-item [item]="todoItem"></app-todo-item>
          <app-task-card-component [item]="todoItem"></app-task-card-component>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  title = 'todo-list for bmetric'
  todoList: TodoItem[] = []

  addItem(title: string) {
    console.log('title', title)
    this.todoList.push({ title: title, longText: title })
  }

  constructor() {}

  ngOnInit() {}
}
