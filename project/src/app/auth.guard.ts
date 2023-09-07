import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
//    if (localStorage.getItem('username')) {
//     return true
    
//    }
//    else{
//     Router.navigate(['login'])
//    }

// };

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router) {
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  
    if (localStorage.getItem('username') != null) {
      return true;
    } else {
      this.route.navigate(['/login'])
    }
  }
  
}

