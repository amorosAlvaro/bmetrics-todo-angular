import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-task-manager></app-task-manager>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list for bmetric'
  author = 'Alvaro'
}
