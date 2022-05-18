import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar>
      <span>Todo App For Bmetric</span>
      <span class="example-spacer"></span>
      <button mat-icon-button class="favorite-icon" aria-label="Switch to admin">
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
