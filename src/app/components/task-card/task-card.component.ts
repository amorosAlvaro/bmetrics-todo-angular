import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-task-card',
  templateUrl: 'task-card.component.html',
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
