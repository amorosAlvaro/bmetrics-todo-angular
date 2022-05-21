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
      <button (click)="openDialog()">LOG IN</button>
      <button (click)="onClickLogOut()">LOG OUT</button>

      <span class="example-spacer"></span>
      <a routerLink="/admin">
        <button mat-icon-button class="favorite-icon" aria-label="Switch to admin">
          <mat-icon>account_circle</mat-icon>
        </button>
      </a>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
  }

  onClickLogOut() {
    this.authService.logout()
    this.router.navigate(['/'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent)
    return dialogRef.afterClosed().subscribe((result) => this.onClickLogin(result))
  }

  ngOnInit() {}
}
