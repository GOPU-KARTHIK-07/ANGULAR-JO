import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const myauthGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  // const isLoggedIn = sessionStorage.getItem('myLoggedIn');
  const isLoggedIn = localStorage.getItem('myLoggedIn')
  console.log("check for: "+isLoggedIn)
  if(isLoggedIn == 'false'){
    alert('please login you will be redirecting to the login page');
     _router.navigate(['login']);
     return false;
  }
  return true;
};
