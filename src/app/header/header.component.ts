import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material'
import { LoginFormComponent } from '../login-form/login-form.component'

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar>
      <span>Todo App For Bmetric</span>
      <span class="example-spacer"></span>
      <button
        *ngIf="!loggedIn"
        (click)="openDialog()"
        mat-icon-button
        class="favorite-icon"
        aria-label="Switch to admin"
      >
        <span>Log In</span>
        <mat-icon>account_circle</mat-icon>
      </button>
      <button
        *ngIf="loggedIn"
        (click)="onClickLogOut()"
        mat-icon-button
        class="favorite-icon"
        aria-label="Switch to admin"
      >
        <span>Log Out</span>
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean
  userName: string
  password: string
  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) {}

  onClickLogin(data: any) {
    this.userName = data.userName
    this.password = data.password

    this.authService.login(this.userName, this.password).subscribe((success) => {
      if (success && this.userName === 'admin') this.router.navigate(['/admin'])
      if (success && this.userName === 'user') this.router.navigate(['/user'])
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
    if (localStorage.getItem('isUserLogged') == 'true') return (this.loggedIn = true)
  }
}
