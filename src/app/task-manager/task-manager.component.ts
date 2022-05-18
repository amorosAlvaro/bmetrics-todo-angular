import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'
import { TaskFormComponent } from '../task-form/task-form.component'
import { MatDialog, MatDialogConfig } from '@angular/material'

@Component({
  selector: 'app-task-manager',
  template: `
    <ul style="list-style-type:none">
      <div class="task-card-layout">
        <li *ngFor="let todoItem of todoList" class="task-card-child">
          <app-task-card
            [item]="todoItem"
            (remove)="removeItem($event)"
            (edit)="openDialog($event)"
          ></app-task-card>
        </li>
      </div>
    </ul>
    <button mat-raised-button (click)="openDialog(null)">Open modal</button>
  `,
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    { title: 'test', text: 'test', responsible: 'test' },
    { title: 'test', text: 'test', responsible: 'test' },
    { title: 'test', text: 'test', responsible: 'test' },
    { title: 'test', text: 'test', responsible: 'test' },
    { title: 'test', text: 'test', responsible: 'test' },
    { title: 'test', text: 'test', responsible: 'test' },
  ]
  title: string
  responsible: string
  text: string

  constructor(public dialog: MatDialog) {}

  removeItem(removeItem) {
    this.todoList = this.todoList.filter((item) => item !== removeItem)
  }

  openDialog(data) {
    let dialogRef
    if (data) {
      const dialogConfig = new MatDialogConfig()
      dialogConfig.data = {
        title: data.title,
        responsible: data.responsible,
        text: data.text,
      }

      dialogRef = this.dialog.open(TaskFormComponent, dialogConfig)
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
      dialogRef = this.dialog.open(TaskFormComponent)
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
