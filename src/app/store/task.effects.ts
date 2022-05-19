import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import * as TaskActions from './task.actions'
import { mergeMap } from 'rxjs/operators'
import { TodoItem } from '../interfaces/todo-item'

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions) {}

  mockData = [
    {
      title: 'Do groceries',
      text: 'Go to Mercadona and buy washing powder and something to eat',
      responsible: 'Álvaro',
    },
    { title: 'Download', text: 'Download and install photoshop for Lyubov', responsible: 'Álvaro' },
    {
      title: 'Technical test',
      text: 'Do the technical test for the oil-exporting company',
      responsible: 'Lyubov',
    },
    {
      title: 'Lorem',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      responsible: 'ipsum',
    },
    { title: 'I', text: 'test', responsible: 'test' },
    { title: 'test', text: 'test', responsible: 'test' },
  ]

  @Effect()
  GetTasks: Observable<Action> = this.actions$.pipe(
    ofType<TaskActions.GetTasks>(TaskActions.GET_TASKS),
    mergeMap(() =>
      this.mockData.map(() => new TaskActions.GetTasksSuccess(this.mockData as TodoItem[]))
    )
  )
}
