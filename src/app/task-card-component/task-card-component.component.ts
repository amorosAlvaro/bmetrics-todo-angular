import { Component, Input, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-task-card-component',
  template: ` <mat-card class="example-card">
    <mat-card-subtitle>{{ item.title }}</mat-card-subtitle>
    <mat-card-title>{{ item.title }}</mat-card-title>
    <mat-card-content>
      <p>{{ item.longText }}</p>
    </mat-card-content>
    <mat-divider inset></mat-divider>
    <mat-card-actions>
      <button mat-button>Delete</button>
      <button mat-button>Edit</button>
    </mat-card-actions>
    <mat-card-footer>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </mat-card-footer>
  </mat-card>`,
  styleUrls: ['./task-card-component.component.css'],
})
export class TaskCardComponentComponent implements OnInit {
  @Input() item: TodoItem

  constructor() {}

  ngOnInit() {}
}
