import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { MatSelect } from '@angular/material'

@Component({
  selector: 'app-form-component',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Task</mat-label>
      <input matInput #titleInputElementRef />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Responsible</mat-label>
      <mat-select #responsibleInputElementRef>
        <mat-option *ngFor="let item of items" [value]="item.name">
          {{ item.name }}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Description</mat-label>
      <textarea matInput #textInputElementRef></textarea>
    </mat-form-field>
    <button
      mat-button
      color="primary"
      (click)="submitValue(titleInputElementRef.value, textInputElementRef.value, responsibleInputElementRef.value)"
    >
      Primary
    </button>
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

  items: any[] = [{ name: 'Tony' }, { name: 'Carmela' }, { name: 'Christofer' }, { name: 'Adriana' }]

  constructor() {}

  submitValue(title: string, text: string, responsible: string): void {
    const newData = { title, text, responsible }

    this.submit.emit(newData)
  }

  ngOnInit() {}
}
