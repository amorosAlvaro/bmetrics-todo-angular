import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material'
import { LoginFormComponent } from '../login-form/login-form.component'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { TaskListState } from '../interfaces/taskList-state'
import * as TaskActions from '../store/task.actions'
// TODO: remove any's

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="header" *ngIf="taskListState$ | async as taskListState">
      <div>
        <a routerLink="/">
          <button mat-button color="primary">
            <mat-icon>dashboard</mat-icon>
            <span>Todo List for Bmetric</span>
          </button>
        </a>

        <a routerLink="/admin">
          <button *ngIf="taskListState.taskList.userRole === 'admin'" mat-button color="primary">
            Admin
          </button>
        </a>
      </div>
      <div class="tasks">
        <p class="counter">
          <mat-icon matBadge="{{ taskListState.taskList.tasks.length }}" matBadgeColor="warn"
            >description</mat-icon
          >
        </p>
      </div>
      <button
        *ngIf="!taskListState.taskList.userIsLogged"
        (click)="openDialog()"
        mat-raised-button
        class="header-button"
        aria-label="Switch to admin"
        color="primary"
      >
        Log In
      </button>
      <button
        *ngIf="taskListState.taskList.userIsLogged"
        (click)="onClickLogOut()"
        mat-raised-button
        class="header-button"
        aria-label="Switch to admin"
        color="warn"
      >
        Log Out
      </button>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  taskListState$: Observable<TaskListState>

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private store: Store<TaskListState>
  ) {}

  onClickLogin(data: any) {
    this.authService.login(data.userName, data.password).subscribe((success) => {
      if (success && data.userName === 'admin') {
        this.store.dispatch(new TaskActions.UpdateLogin(true))
        this.store.dispatch(new TaskActions.UpdateRole('admin'))
        this.router.navigate(['/admin'])
      }
      if (success) {
        this.store.dispatch(new TaskActions.UpdateLogin(true))
        this.store.dispatch(new TaskActions.UpdateRole('user'))
      }
    })
  }

  onClickLogOut() {
    this.authService.logout()
    this.store.dispatch(new TaskActions.UpdateLogin(false))
    this.store.dispatch(new TaskActions.UpdateRole(null))
    this.router.navigate(['/'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent)
    return dialogRef.afterClosed().subscribe((result) => this.onClickLogin(result))
  }

  ngOnInit() {
    this.taskListState$ = this.store.select((result) => result)

    const localStorageLogin = localStorage.getItem('isUserLogged')
    const localStorageRole = localStorage.getItem('role')

    if (localStorageLogin == 'true') this.store.dispatch(new TaskActions.UpdateLogin(true))
    if (localStorageRole) this.store.dispatch(new TaskActions.UpdateRole(localStorageRole))
  }
}
