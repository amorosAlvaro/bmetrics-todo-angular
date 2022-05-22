import { Component, EventEmitter, Inject, Output } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { ITaskForm } from '../interfaces/interfaces'

@Component({
  selector: 'app-task-form',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Task</mat-label>
      <input matInput [(ngModel)]="title" maxlength="20" />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Responsible</mat-label>
      <input matInput [(ngModel)]="responsible" maxlength="20" />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Description</mat-label>
      <textarea matInput [(ngModel)]="text" maxlength="40"></textarea>
    </mat-form-field>
    <button mat-raised-button color="primary" (click)="onNoClick()">Save</button>
  `,
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() submit: EventEmitter<ITaskForm> = new EventEmitter<ITaskForm>()

  title: string
  text: string
  responsible: string
  id: number

  constructor(public dialogRef: MatDialogRef<TaskFormComponent>, @Inject(MAT_DIALOG_DATA) data) {
    if (data) {
      this.title = data.title
      this.text = data.text
      this.responsible = data.responsible
      this.id = data.id
    }
  }

  onNoClick(): void {
    this.dialogRef.close({
      title: this.title,
      responsible: this.responsible,
      text: this.text,
      id: this.id,
    })
  }
}
