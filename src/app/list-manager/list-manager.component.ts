import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'
import { FormComponent } from '../form-component/form.component'
import { MatDialog, MatDialogConfig } from '@angular/material'

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
            (edit)="openDialog($event)"
          ></app-task-card-component>
        </li>
      </ul>
      <button mat-raised-button (click)="openDialog(null)">Open modal</button>
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

  openDialog(data) {
    /*
    if (data) {
      const dialogConfig = new MatDialogConfig()
      dialogConfig.data = {
        title: data.title,
        responsible: data.responsible,
        text: data.text,
      }
      this.dialog.open(FormComponent, dialogConfig.data)
    }

     */
    let dialogRef
    if (data) {
      const dialogConfig = new MatDialogConfig()
      dialogConfig.data = {
        title: data.title,
        responsible: data.responsible,
        text: data.text,
      }

      dialogRef = this.dialog.open(FormComponent, dialogConfig)
      return dialogRef.afterClosed().subscribe((result) => {
        this.todoList = this.todoList.filter((item) => item !== data)

        this.todoList.push({
          title: result.title,
          text: result.text,
          responsible: result.responsible,
        })
      })
    }

    if (!data) {
      dialogRef = this.dialog.open(FormComponent)
      dialogRef.afterClosed().subscribe((result) => {
        this.todoList.push({
          title: result.title,
          text: result.text,
          responsible: result.responsible,
        })
      })
    }
  }

  ngOnInit() {}
}
