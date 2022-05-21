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
    this.isUserLogged = username === 'admin' && password === 'admin'
    localStorage.setItem('isUserLogged', this.isUserLogged ? 'true' : 'false')

    // What is "of" and what is "pipe" why not map? what is tap?
    return of(this.isUserLogged).pipe(tap((val) => console.log('user is authenticated', val)))
  }

  logout(): void {
    this.isUserLogged = false
    localStorage.removeItem('isUserLogged')
  }
  constructor() {}
}
