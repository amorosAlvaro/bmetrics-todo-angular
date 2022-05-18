import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'
import { Router } from '@angular/router'

@Component({
  selector: 'app-task-card',
  template: ` <mat-card class="card">
    <mat-card-subtitle>{{ item.title }}</mat-card-subtitle>
    <mat-card-title>{{ item.responsible }}</mat-card-title>
    <mat-card-content>
      <p>{{ item.text }}</p>
    </mat-card-content>
    <mat-divider inset></mat-divider>
    <mat-card-actions *ngIf="router == '/admin'" class="card-footer">
      <button mat-raised-button color="accent" (click)="editItem()">Edit</button>
      <button mat-raised-button color="primary" (click)="removeItem()">Delete</button>
    </mat-card-actions>
  </mat-card>`,
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input() item: TodoItem
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()
  @Output() edit: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()
  router: string

  constructor(private _router: Router) {
    this.router = _router.url
  }

  removeItem(): void {
    this.remove.emit(this.item)
  }

  editItem(): void {
    this.edit.emit(this.item)
  }

  ngOnInit() {}
}
