import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { AuthService } from './services/auth.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkLogin()
  }

  constructor(private authService: AuthService, private router: Router) {}

  checkLogin(): true | UrlTree {
    const isUserLogged: string = localStorage.getItem('isUserLogged')
    const userRole: string = localStorage.getItem('role')
    console.log('userRole', userRole)
    console.log('isUserLogged', isUserLogged)

    if (isUserLogged == 'true' && userRole === 'admin') {
      console.log('admin router')
      this.router.parseUrl('/admin')
      return true
    }
    return this.router.parseUrl('/')
  }
}
