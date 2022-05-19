import { TaskListState } from './task.state'
import * as TaskActions from './task.actions'
import { TodoItem } from '../interfaces/todo-item'
const initialTasks = [
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

export type Action = TaskActions.All

const defaultTaskStates: TodoItem[] = []

const defaultState: TaskListState = {
  tasks: defaultTaskStates,
}

export function TaskReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case TaskActions.DELETE_TASK: {
      return { ...state, ...state.tasks.splice(state.tasks.indexOf(action.payload), 1) }
    }

    case TaskActions.CREATE_TASK: {
      return {
        tasks: [...state.tasks, action.payload],
      }
    }

    default:
      return {
        tasks: [...initialTasks],
      }
  }
}
