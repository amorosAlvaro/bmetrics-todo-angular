import { Component, EventEmitter, Inject, Output } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { ITaskForm } from '../interfaces/interfaces'

@Component({
  selector: 'app-task-form',
  templateUrl: 'task-form-component.html',
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
