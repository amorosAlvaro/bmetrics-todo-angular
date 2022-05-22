import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material'
import { LoginFormComponent } from '../login-form/login-form.component'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { TodoItem } from '../interfaces/todo-item'
import { TaskListState } from '../interfaces/taskList-state'
// TODO: remove any's

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="header">
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
      <div class="tasks" *ngIf="taskListState$ | async as taskListState">
        <p class="counter">
          <mat-icon matBadge="{{ taskListState }}" matBadgeColor="warn">description</mat-icon>
        </p>
      </div>
      <button
        *ngIf="!loggedIn"
        (click)="openDialog()"
        mat-raised-button
        class="header-button"
        aria-label="Switch to admin"
        color="primary"
      >
        Log In
      </button>
      <button
        *ngIf="loggedIn"
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
  loggedIn: boolean
  userName: string
  password: string
  taskListState$: Observable<number>

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
      if (success && this.userName === 'admin') this.router.navigate(['/admin'])
    })
    this.changeLoggedStatus()
  }

  onClickLogOut() {
    this.authService.logout()
    localStorage.clear()
    this.router.navigate(['/'])
    this.changeLoggedStatus()
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent)
    return dialogRef.afterClosed().subscribe((result) => this.onClickLogin(result))
  }

  changeLoggedStatus() {
    if (localStorage.getItem('isUserLogged') == 'true') return (this.loggedIn = true)
    return (this.loggedIn = false)
  }

  ngOnInit() {
    this.taskListState$ = this.store.select((result) => result.taskList.tasks.length)
    if (localStorage.getItem('isUserLogged') == 'true') this.loggedIn = true
  }
}
