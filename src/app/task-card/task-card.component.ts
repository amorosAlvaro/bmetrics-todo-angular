import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item'
import { Router } from '@angular/router'
import { ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-task-card',
  template: ` <mat-card class="card">
    <ng-container *ngIf="!task.create">
      <mat-card-subtitle>{{ task.title }}</mat-card-subtitle>
      <mat-card-title>{{ task.responsible }}</mat-card-title>
      <mat-card-content>
        <p>{{ task.text }}</p>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions *ngIf="router == '/admin'" class="card-footer">
        <button mat-raised-button color="accent">Edit</button>
        <button mat-raised-button color="primary" (click)="this.deleted.emit(task)">Delete</button>
      </mat-card-actions>
    </ng-container>
  </mat-card>`,
  styleUrls: ['./task-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent implements OnInit {
  @Input() task

  @Output() created = new EventEmitter<any>()
  @Output() deleted = new EventEmitter<any>()
  @Output() edited = new EventEmitter<any>()

  router: string

  constructor(private _router: Router) {
    this.router = _router.url
  }

  ngOnInit() {}
  createTask(task) {
    console.log(task)
    this.created.emit(task)
  }

  editTask(task) {
    this.task.editing = !this.task.editing
  }

  completeTask(task) {
    this.completed.emit(task)
  }

  editTaskSubmit(task) {
    this.edited.emit(task)
  }

  /*
  @Input() item: TodoItem
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()
  @Output() edit: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()

  @Input() task

  router: string
  title: string
  text: string
  responsible: string

  constructor(private _router: Router) {
    this.router = _router.url
  }

  removeItem(): void {
    this.remove.emit(this.item)
  }

  editItem(): void {
    this.edit.emit(this.item)
  }

  ngOnInit() {
    console.log('task in card', this.task)
  }

   */
}
