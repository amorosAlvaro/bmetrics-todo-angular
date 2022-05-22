import { ITaskItem } from '../interfaces/interfaces'
import { Action } from '@ngrx/store'

export const CREATE_TASK = '[TASK] CREATE_TASK'

export const DELETE_TASK = '[TASK] DELETE_TASK'

export const UPDATE_TASK = '[TASK] UPDATE_TASK'

export const UPDATE_LOGIN = '[TASK] UPDATE_LOGIN'

export const UPDATE_ROLE = '[TASK] UPDATE_ROLE'

export class CreateTask implements Action {
  readonly type = CREATE_TASK

  constructor(public payload: ITaskItem) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK
  constructor(public payload: ITaskItem) {}
}

export class UpdateTask implements Action {
  readonly type = UPDATE_TASK
  constructor(public payload: ITaskItem) {}
}

export class UpdateLogin implements Action {
  readonly type = UPDATE_LOGIN
  constructor(public payload: boolean) {}
}

export class UpdateRole implements Action {
  readonly type = UPDATE_ROLE
  constructor(public payload: string) {}
}
export type All = DeleteTask | CreateTask | UpdateTask | UpdateLogin | UpdateRole
