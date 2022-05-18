import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-form-component',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Task</mat-label>
      <input matInput [(ngModel)]="title" />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Responsible</mat-label>
      <input matInput [(ngModel)]="responsible" />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Description</mat-label>
      <textarea matInput [(ngModel)]="text"></textarea>
    </mat-form-field>
    <button mat-button (click)="onNoClick()">New Task</button>
  `,
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() submit: EventEmitter<{
    title: string
    text: string
    responsible: string
  }> = new EventEmitter<{
    title: string
    text: string
    responsible: string
  }>()

  title: string
  text: string
  responsible: string

  constructor(public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) data) {
    if (data) {
      this.title = data.title
      this.text = data.text
      this.responsible = data.responsible
    }
  }

  onNoClick(): void {
    this.dialogRef.close({
      title: this.title,
      responsible: this.responsible,
      text: this.text,
    })
  }

  ngOnInit() {
    console.log('this.title', this.title)
    console.log('MAT_DIALOG_DATA', MAT_DIALOG_DATA)
  }
}
