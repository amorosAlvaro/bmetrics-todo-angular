import { TaskListState } from './task.state'
import * as TaskActions from './task.actions'
import { TodoItem } from '../interfaces/todo-item'

export type Action = TaskActions.All

const defaultTaskStates: TodoItem[] = []

const defaultState: TaskListState = {
  tasks: defaultTaskStates,
}

export function TaskReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case TaskActions.GET_TASKS: {
      return { ...state }
    }

    case TaskActions.GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: [...action.payload],
      }
    }
    case TaskActions.DELETE_TASK: {
      return { ...state, ...state.tasks.splice(state.tasks.indexOf(action.payload), 1) }
    }

    case TaskActions.DELETE_TASK_SUCCESS: {
      return state
    }

    case TaskActions.DELETE_TASK_ERROR: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    }

    case TaskActions.CREATE_TASK: {
      return {
        tasks: [...state.tasks, action.payload],
      }
    }
    
  }
}
