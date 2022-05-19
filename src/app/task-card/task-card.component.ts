import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
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
        <button mat-raised-button color="accent" (click)="this.edited.emit(task)">Edit</button>
        <button mat-raised-button color="primary" (click)="this.deleted.emit(task)">Delete</button>
      </mat-card-actions>
    </ng-container>
  </mat-card>`,
  styleUrls: ['./task-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
  @Input() task

  @Output() created = new EventEmitter<any>()
  @Output() deleted = new EventEmitter<any>()
  @Output() edited = new EventEmitter<any>()

  router: string

  constructor(private _router: Router) {
    this.router = _router.url
  }
}
