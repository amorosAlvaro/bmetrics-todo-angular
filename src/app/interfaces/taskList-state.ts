import { TodoItem } from './todo-item'

export interface TaskListState {
  tasks: TodoItem[]
  userIsLogged: boolean
  userRole: string | null
}
