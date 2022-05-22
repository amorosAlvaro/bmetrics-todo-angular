import { of } from 'rxjs'

export class AuthService {
  isUserLogged: boolean

  login(username: string, password: string) {
    this.isUserLogged =
      (username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')

    localStorage.setItem('isUserLogged', this.isUserLogged ? 'true' : 'false')
    if (this.isUserLogged) {
      localStorage.setItem('role', username)
    }
    return of(this.isUserLogged)
  }

  logout(): void {
    this.isUserLogged = false
    localStorage.clear()
  }
}
