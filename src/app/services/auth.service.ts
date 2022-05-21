import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLogged: boolean

  // TODO:When exactly do I ned to use Observable?
  login(username: string, password: string) {
    console.log(username)
    console.log(password)
    this.isUserLogged =
      (username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')

    localStorage.setItem('isUserLogged', this.isUserLogged ? 'true' : 'false')

    return of(this.isUserLogged)
  }

  logout(): void {
    this.isUserLogged = false
    localStorage.removeItem('isUserLogged')
  }
  constructor() {}
}
