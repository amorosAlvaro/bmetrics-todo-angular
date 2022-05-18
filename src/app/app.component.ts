import { Component } from '@angular/core'
// TODO: fix bug when closing modal with click

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list for bmetric'
  author = 'Alvaro'
}
