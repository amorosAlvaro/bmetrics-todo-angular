import * as TaskActions from './task.actions'
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

const initialState = {
  tasks: initialTasks,
  userIsLogged: false,
  userRole: null,
}

export function TaskReducer(state = initialState, action: Action) {
  switch (action.type) {
    case TaskActions.DELETE_TASK: {
      return { ...state, ...state.tasks.splice(state.tasks.indexOf(action.payload), 1) }
    }
    case TaskActions.CREATE_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    }
    case TaskActions.UPDATE_TASK: {
      const editedTasks = state.tasks.map((task) => {
        if (task.id !== action.payload.id) {
          return task
        }
        return {
          ...task,
          title: action.payload.title,
          text: action.payload.text,
          responsible: action.payload.responsible,
        }
      })
      return {
        tasks: editedTasks,
      }
    }
    case TaskActions.UPDATE_LOGIN: {
      return {
        ...state,
        userIsLogged: action.payload,
      }
    }

    case TaskActions.UPDATE_ROLE: {
      console.log('state role', state)

      return {
        ...state,
        userRole: action.payload,
      }
    }

    default:
      return state
  }
}
