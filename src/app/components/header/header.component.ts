import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material'
import { LoginFormComponent } from '../login-form/login-form.component'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ITaskListState } from '../../interfaces/interfaces'
import * as TaskActions from '../../store/task.actions'
import { TaskFormComponent } from '../task-form/task-form.component'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  taskListState$: Observable<ITaskListState>

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    public router: Router,
    public store: Store<ITaskListState>
  ) {}

  ngOnInit() {
    this.taskListState$ = this.store.select((result) => result)

    const localStorageLogin = localStorage.getItem('isUserLogged')
    const localStorageRole = localStorage.getItem('role')

    if (localStorageLogin == 'true') this.store.dispatch(new TaskActions.UpdateLogin(true))
    if (localStorageRole) this.store.dispatch(new TaskActions.UpdateRole(localStorageRole))
  }

  onClickLogin(data: { userName: string; password: string }) {
    this.authService
      .login(data.userName, data.password)
      .subscribe((success) => {
        if (success) {
          this.store.dispatch(new TaskActions.UpdateLogin(true))
          this.store.dispatch(new TaskActions.UpdateRole(data.userName))
          data.userName === 'admin' && this.router.navigate(['/admin'])
        }
      })
      .unsubscribe()
  }

  onClickLogout() {
    this.authService.logout()
    this.store.dispatch(new TaskActions.UpdateLogin(false))
    this.store.dispatch(new TaskActions.UpdateRole(null))
    this.router.navigate(['/'])
  }
  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent, { disableClose: true })
    return dialogRef.afterClosed().subscribe((result) => this.onClickLogin(result))
  }

  openAddTaskDialog() {
    const dialogRef = this.dialog.open(TaskFormComponent, { disableClose: true })
    return dialogRef.afterClosed().subscribe((result) => this.onCreate(result))
  }

  onClickAdmin() {
    this.taskListState$
      .pipe(select('taskList'))
      .subscribe((object) => {
        if (object.userRole === 'admin') {
          return this.router.navigate(['/admin'])
        }
        return this.openLoginDialog()
      })
      .unsubscribe()
  }

  onCreate(task) {
    this.store.dispatch(new TaskActions.CreateTask(task))
  }
}
