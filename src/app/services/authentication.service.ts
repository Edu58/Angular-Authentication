import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from '../models/userData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: userData = {
    email: 'test@mail.com',
    password: 'enter'
  } 

  isAuthenticated: boolean = false

  constructor (private router: Router) { }
  
  checkCredentials ( email: string, password: string ): void {
    if ( email === this.user.email && password === this.user.password )
    {
      console.log("Login Successful")
      this.isAuthenticated = true
      this.router.navigateByUrl('/')
    } else
    {
      console.log("Wrong Credentials")
      this.isAuthenticated = false
    }
  }

  logout (): void {
    this.isAuthenticated = false
    this.router.navigateByUrl('/login')
  }

}
