import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'
import { MatDialog } from '@angular/material'
import { Router } from '@angular/router'
import { TaskFormComponent } from '../task-form/task-form.component'
import { MatDialogConfig } from '@angular/material'
import { TaskListState } from '../store/task.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as TaskActions from '../store/task.actions'

@Component({
  selector: 'app-task-manager',
  template: ` <button
      *ngIf="router === '/admin'"
      (click)="openDialog(null)"
      mat-raised-button
      color="primary"
    >
      <span>Add Task</span>
    </button>
    <div class="tasks" *ngIf="taskListState$ | async as taskListState">
      <ul style="list-style-type:none">
        <div class="task-card-layout">
          <li *ngFor="let task of taskListState.tasks">
            <app-task-card
              [task]="task"
              (deleted)="onDelete(task)"
              (edited)="openDialog(task)"
            ></app-task-card>
          </li>
        </div>
      </ul>
    </div>`,
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit {
  taskListState$: Observable<TodoItem[]>
  router: string

  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private store: Store<TaskListState>
  ) {
    this.router = _router.url
  }

  ngOnInit() {
    this.taskListState$ = this.store.select((state) => state.tasks)
  }

  onCreate(task) {
    this.store.dispatch(new TaskActions.CreateTask(task))
  }

  onDelete(task) {
    this.store.dispatch(new TaskActions.DeleteTask(task))
  }

  onEdit(task) {
    this.store.dispatch(new TaskActions.UpdateTask(task))
  }

  openDialog(data) {
    let dialogRef

    if (data) {
      const dialogConfig = new MatDialogConfig()
      dialogConfig.data = {
        id: data.id,
        title: data.title,
        responsible: data.responsible,
        text: data.text,
      }
      dialogRef = this.dialog.open(TaskFormComponent, dialogConfig)
      return dialogRef.afterClosed().subscribe((result: TodoItem) => this.onEdit(result))
    }
    dialogRef = this.dialog.open(TaskFormComponent)
    return dialogRef.afterClosed().subscribe((result) => this.onCreate(result))
  }
}
