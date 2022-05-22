import { Component, EventEmitter, Inject, Output } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { ILoginForm } from '../interfaces/interfaces'

// TODO: Group field in task-fom-component

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.components.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() submit: EventEmitter<ILoginForm> = new EventEmitter<ILoginForm>()
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
}
