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
          <button *ngIf="userName === 'admin'" mat-button color="primary">Admin</button>
        </a>
      </div>
      <div class="tasks">
        <p class="counter">
          <mat-icon matBadge="{{ taskListState.tasks.length }}" matBadgeColor="warn"
            >description</mat-icon
          >
        </p>
      </div>
      <div *ngIf="taskListState$ | async as taskListState">
        <button
          *ngIf="!taskListState.userIsLogged"
          (click)="openDialog()"
          mat-raised-button
          class="header-button"
          aria-label="Switch to admin"
          color="primary"
        >
          Log In
        </button>
      </div>
      <button
        *ngIf="taskListState.userIsLogged"
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
  userName: string
  password: string
  taskListState$: Observable<TaskListState>

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private store: Store<TaskListState>
  ) {}

  onClickLogin(data: any) {
    this.userName = data.userName
    this.password = data.password

    this.authService.login(this.userName, this.password).subscribe((success) => {
      if (success && this.userName === 'admin') {
        this.store.dispatch(new TaskActions.UpdateLogin(true))
        this.router.navigate(['/admin'])
      }
      if (success) {
        this.store.dispatch(new TaskActions.UpdateLogin(true))
      }
    })
  }

  onClickLogOut() {
    this.authService.logout()
    localStorage.clear()
    this.store.dispatch(new TaskActions.UpdateLogin(false))
    this.router.navigate(['/'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent)
    return dialogRef.afterClosed().subscribe((result) => this.onClickLogin(result))
  }

  ngOnInit() {
    this.taskListState$ = this.store.select((result) => result.taskList)

    if (localStorage.getItem('isUserLogged') == 'true')
      this.store.dispatch(new TaskActions.UpdateLogin(true))
  }
}
