import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { AuthService } from './services/auth.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url
    return this.checkLogin(url)
  }

  constructor(private authService: AuthService, private router: Router) {}

  checkLogin(url: string): true | UrlTree {
    let isUserLogged: string = localStorage.getItem('isUserLoggedIn')
    let userRole: string = localStorage.getItem('role')

    if (isUserLogged == 'true' && userRole === 'admin') {
      this.router.parseUrl('/admin')
    }
    return this.router.parseUrl('/')
  }
}
