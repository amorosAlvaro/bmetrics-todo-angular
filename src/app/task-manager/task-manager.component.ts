import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Router } from '@angular/router'
import { TaskFormComponent } from '../task-form/task-form.component'

import { TaskListState } from '../store/task.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as TaskActions from '../store/task.actions'

@Component({
  selector: 'app-task-manager',
  template: ` <button
      *ngIf="router === '/admin'"
      (click)="openDialog()"
      mat-raised-button
      color="primary"
    >
      <span>Add Task</span>
    </button>
    <div class="tasks" *ngIf="taskListState$ | async as taskListState">
      <ul style="list-style-type:none">
        <div class="task-card-layout">
          <li *ngFor="let task of taskListState.tasks">
            <app-task-card [task]="task"></app-task-card>
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

    this.store.dispatch(new TaskActions.GetTasks())
  }

  onCreate(task) {
    this.store.dispatch(new TaskActions.CreateTask(task))
  }

  openDialog(data) {
    let dialogRef
    /*
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

     */

    if (!data) {
      dialogRef = this.dialog.open(TaskFormComponent)
      dialogRef.afterClosed().subscribe((result) => {
        this.store.dispatch(new TaskActions.CreateTask(result))
      })
    }
  }

  /*
  onDelete(todo) {
    this.store.dispatch(new TodoAction.DeleteTodo(todo))
  }

  onEdit(todo) {
    this.store.dispatch(new TodoAction.UpdateTodo(todo))
  }

  completeTodo(todo) {
    this.store.dispatch(new TodoAction.CompleteTodo(todo))
  }

   */

  /*
  removeItem(removeItem) {
    this.todoList = this.todoList.filter((item) => item !== removeItem)
  }


   */
}
