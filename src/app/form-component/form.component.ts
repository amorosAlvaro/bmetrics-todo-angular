import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core'
import { MatSelect } from '@angular/material'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-form-component',
  template: `
    <mat-dialog-content>
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
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Save Task</button>
    </mat-dialog-actions>
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

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close({
      title: this.title,
      responsible: this.responsible,
      text: this.text,
    })
  }

  /*
  submitValue(title: string, text: string, responsible: string): void {
    const newData = { title, text, responsible }
    console.log('newData', newData)

    this.submit.emit(newData)
  }

   */

  ngOnInit() {}
}
