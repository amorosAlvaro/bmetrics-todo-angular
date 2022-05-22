import { TodoItem } from './todo-item'

export interface TaskListState {
  taskList: {
    tasks: TodoItem[]
    userIsLogged: boolean
    userRole: string | null
  }
}
