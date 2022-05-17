import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-list-manager',
  template: `
    <div>
      <h3>Todo list:</h3>
      <app-form-component (submit)="addItem($event)"></app-form-component>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-task-card-component [item]="todoItem" (remove)="removeItem($event)"></app-task-card-component>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  title = 'todo-list for bmetric'
  todoList: TodoItem[] = []

  addItem(data: { title: string; text: string; responsible: string }) {
    this.todoList.push({ title: data.title, text: data.text, responsible: data.responsible })
  }

  removeItem(removeItem) {
    const newArray = this.todoList.filter((item) => item.title !== removeItem.title)
    this.todoList = newArray
  }

  constructor() {}

  ngOnInit() {}
}
