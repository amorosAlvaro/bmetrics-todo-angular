import { TaskListState } from './task.state'
import * as TaskActions from './task.actions'
import { TodoItem } from '../interfaces/todo-item'
const initialTasks = [
  {
    id: Date.now(),
    title: 'Do groceries',
    text: 'Go to Mercadona and buy washing powder and something to eat',
    responsible: 'Álvaro',
  },
  {
    id: Date.now() + 1,
    title: 'Download',
    text: 'Download and install photoshop for Lyubov',
    responsible: 'Álvaro',
  },
  {
    id: Date.now() + 2,
    title: 'Technical test',
    text: 'Do the technical test for the oil-exporting company',
    responsible: 'Lyubov',
  },
  {
    id: Date.now() + 3,
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    responsible: 'ipsum',
  },
  {
    id: Date.now() + 4,

    title: 'I',
    text: 'test',
    responsible: 'test',
  },
  {
    id: Date.now() + 5,
    title: 'test',
    text: 'test',
    responsible: 'test',
  },
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
    case TaskActions.UPDATE_TASK: {
      const editedTasks = state.tasks.map((task) => {
        console.log('task.id', task.id)
        console.log('payload.id', action.payload)
        if (task.id !== action.payload.id) {
          return task
        }
        console.log('fit return', task)

        return {
          ...task,
          title: action.payload.title,
          text: action.payload.text,
          responsible: action.payload.responsible,
        }
      })

      console.log('action.payload', action.payload)

      console.log('editedTasks', editedTasks)
      return {
        tasks: editedTasks,
      }
    }

    default:
      return {
        tasks: [...initialTasks],
      }
  }
}
