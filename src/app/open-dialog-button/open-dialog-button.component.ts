import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { FormComponent } from '../form-component/form.component'

@Component({
  selector: 'app-open-dialog-button',
  template: ` <button mat-raised-button (click)="openDialog()">Open dialog</button> `,
  styleUrls: ['./open-dialog-button.component.css'],
})
export class OpenDialogButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(FormComponent)
  }

  ngOnInit() {}
}
