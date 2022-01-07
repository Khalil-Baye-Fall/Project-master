import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(
    private authService: AuthServiceService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
        this.router.navigate(['/home'])
        return false
    } else {
        return true
    }
}


}
