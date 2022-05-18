import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-task-card-component',
  template: ` <mat-card class="example-card">
    <mat-card-subtitle>{{ item.title }}</mat-card-subtitle>
    <mat-card-title>{{ item.responsible }}</mat-card-title>
    <mat-card-content>
      <p>{{ item.text }}</p>
    </mat-card-content>
    <mat-divider inset></mat-divider>
    <mat-card-actions>
      <button mat-button (click)="removeItem()">Delete</button>
      <button mat-button (click)="editItem()">Edit</button>
    </mat-card-actions>
    <mat-card-footer>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </mat-card-footer>
  </mat-card>`,
  styleUrls: ['./task-card-component.component.css'],
})
export class TaskCardComponentComponent implements OnInit {
  @Input() item: TodoItem
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()
  @Output() edit: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()

  constructor() {}

  removeItem(): void {
    this.remove.emit(this.item)
  }

  editItem(): void {
    this.edit.emit(this.item)
  }

  ngOnInit() {}
}
