import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ title }}!</h1>
    <h2>This is a technical tests developed by {{ author }}</h2>
    <app-list-manager></app-list-manager> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list for bmetric'
  author = 'Alvaro'
}
