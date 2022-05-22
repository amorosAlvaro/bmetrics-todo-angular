import { Injectable } from '@angular/core'
import { of } from 'rxjs'

export class AuthService {
  isUserLogged: boolean

  // TODO:When exactly do I ned to use Observable?
  login(username: string, password: string) {
    this.isUserLogged =
      (username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')

    localStorage.setItem('isUserLogged', this.isUserLogged ? 'true' : 'false')
    if (this.isUserLogged) localStorage.setItem('role', username)

    //TODO: WHAT DOES OFF DO
    return of(this.isUserLogged)
  }

  logout(): void {
    this.isUserLogged = false
    localStorage.clear()
  }
  constructor() {}
}
