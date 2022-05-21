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

  onClickSubmit(data: any) {
    this.userName = data.userName
    this.password = data.password

    console.log('header Login page: ' + this.userName)
    console.log('header Login page: ' + this.password)

    this.authService.login(this.userName, this.password).subscribe((data) => {
      console.log('Is Login Success: ' + data)

      if (data) this.router.navigate(['/admin'])
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent)
    return dialogRef.afterClosed().subscribe((result) => this.onClickSubmit(result))
  }

  ngOnInit() {}
}
