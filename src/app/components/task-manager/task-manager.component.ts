import { Component, OnInit } from '@angular/core'
import { ITaskItem } from '../../interfaces/interfaces'
import { MatDialog } from '@angular/material'
import { Router } from '@angular/router'
import { TaskFormComponent } from '../task-form/task-form.component'
import { MatDialogConfig } from '@angular/material'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as TaskActions from '../../store/task.actions'
import { ITaskListState } from '../../interfaces/interfaces'

@Component({
  selector: 'app-task-manager',
  templateUrl: 'task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit {
  taskListState$: Observable<ITaskItem[]>
  router: string

  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private store: Store<ITaskListState>
  ) {
    this.router = _router.url
  }

  ngOnInit() {
    this.taskListState$ = this.store.select((result) => result.taskList.tasks)
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

  openEditTaskDialog(data) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      id: data.id,
      title: data.title,
      responsible: data.responsible,
      text: data.text,
    }
    dialogConfig.disableClose = true

    const dialogRef = this.dialog.open(TaskFormComponent, dialogConfig)
    return dialogRef.afterClosed().subscribe((result: ITaskItem) => this.onEdit(result))
  }
}
