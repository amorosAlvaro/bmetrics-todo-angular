import { TodoItem } from '../interfaces/todo-item'
import { Action } from '@ngrx/store'

export const GET_TASKS = '[TASK] GET_TASKS'
export const GET_TASKS_SUCCESS = '[TASK] GET_TASKS_SUCCESS'
export const GET_TASKS_ERROR = '[TASK] GET_TASKS_ERROR'

export const CREATE_TASK = '[TASK] CREATE_TASK'
export const CREATE_TASK_SUCCESS = '[TASK] CREATE_TASK_SUCCESS'
export const CREATE_TASK_ERROR = '[TASK] CREATE_TASK_ERROR'

export const DELETE_TASK = '[TASK] DELETE_TASK'
export const DELETE_TASK_SUCCESS = '[TASK] DELETE_TASK_SUCCESS'
export const DELETE_TASK_ERROR = '[TASK] DELETE_TASK_ERROR'

export const UPDATE_TASK = '[TASK] UPDATE_TASK'
export const UPDATE_TASK_SUCCESS = '[TASK] UPDATE_TASK_SUCCESS'
export const UPDATE_TASK_ERROR = '[TASK] UPDATE_TASK_ERROR'

export class GetTasks implements Action {
  readonly type = GET_TASKS
}
export class GetTasksSuccess implements Action {
  readonly type = GET_TASKS_SUCCESS
  constructor(public payload: TodoItem[]) {}
}
export class GetTasksError implements Action {
  readonly type = GET_TASKS_ERROR
}

export class CreateTask implements Action {
  readonly type = CREATE_TASK

  constructor(public payload: TodoItem) {}
}
export class CreateTaskSuccess implements Action {
  readonly type = CREATE_TASK_SUCCESS

  constructor(public payload: TodoItem) {}
}
export class CreateTaskError implements Action {
  readonly type = CREATE_TASK_ERROR
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK
  constructor(public payload: TodoItem) {}
}
export class DeleteTaskSuccess implements Action {
  readonly type = DELETE_TASK_SUCCESS
  constructor(public payload: TodoItem) {}
}
export class DeleteTaskError implements Action {
  readonly type = DELETE_TASK_ERROR
  constructor(public payload: TodoItem) {}
}

export class UpdateTask implements Action {
  readonly type = UPDATE_TASK
  constructor(public payload: TodoItem) {}
}
export class UpdateTaskSuccess implements Action {
  readonly type = UPDATE_TASK_SUCCESS
  constructor(public payload: TodoItem) {}
}
export class UpdateTaskError implements Action {
  readonly type = UPDATE_TASK_ERROR
  constructor(public payload: TodoItem) {}
}

export type All =
  | GetTasks
  | GetTasksSuccess
  | GetTasksError
  | DeleteTask
  | DeleteTaskSuccess
  | DeleteTaskError
  | CreateTask
  | CreateTaskSuccess
  | CreateTaskError
