import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'
import { FormComponent } from '../form-component/form.component'
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-list-manager',
  template: `
    <div>
      <h3>Todo list:</h3>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-task-card-component
            [item]="todoItem"
            (remove)="removeItem($event)"
          ></app-task-card-component>
        </li>
      </ul>
      <button mat-raised-button (click)="openDialog()">Open modal</button>
    </div>
  `,
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = []
  title: string
  responsible: string
  text: string

  constructor(public dialog: MatDialog) {}

  removeItem(removeItem) {
    this.todoList = this.todoList.filter((item) => item !== removeItem)
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      data: { title: this.title, text: this.text },
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.todoList.push({
        title: result.title,
        text: result.text,
        responsible: result.responsible,
      })
    })
  }

  ngOnInit() {}
}
