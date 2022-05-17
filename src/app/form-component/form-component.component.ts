import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-form-component',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Input</mat-label>
      <input matInput #titleInputElementRef />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Select</mat-label>
      <mat-select>
        <mat-option value="one">First option</mat-option>
        <mat-option value="two">Second option</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Textarea</mat-label>
      <textarea matInput #textInputElementRef></textarea>
    </mat-form-field>
    <button
      mat-button
      color="primary"
      (click)="
        submitValue(titleInputElementRef.value, textInputElementRef.value)
      "
    >
      Primary
    </button>
  `,
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  @Output() submit: EventEmitter<{ newTitle: string; newText: string }> =
    new EventEmitter<{ newTitle: string; newText: string }>()

  constructor() {}

  submitValue(newTitle: string, newText: string): void {
    const newData = { newTitle, newText }
    console.log('buttonclicked:', newData)

    this.submit.emit(newData)
  }

  ngOnInit() {}
}
