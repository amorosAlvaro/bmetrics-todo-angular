export interface ITaskItem {
  id: number
  title: string
  text: string
  responsible: string
}

export interface ITaskListState {
  taskList: {
    tasks: ITaskItem[]
    userIsLogged: boolean
    userRole: string | null
  }
}

export interface ITaskForm {
  title: string
  text: string
  responsible: string
  id: number
}

export interface ILoginForm {
  userName: string
  password: string
}
