import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
// TODO: Group field in task-fom-component

@Component({
  selector: 'app-login-form',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Responsible</mat-label>
      <input matInput [(ngModel)]="userName" />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Description</mat-label>
      <textarea matInput [(ngModel)]="password"></textarea>
    </mat-form-field>
    <button mat-raised-button color="primary" (click)="onNoClick()">Log In</button>
  `,
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Output() submit: EventEmitter<{
    userName: string
    password: string
  }> = new EventEmitter<{
    userName: string
    password: string
  }>()
  userName: string
  password: string

  constructor(public dialogRef: MatDialogRef<LoginFormComponent>, @Inject(MAT_DIALOG_DATA) data) {
    if (data) {
      this.userName = data.userName
      this.password = data.password
    }
  }

  onNoClick(): void {
    this.dialogRef.close({
      userName: this.userName,
      password: this.password,
    })
  }

  ngOnInit() {}
}
