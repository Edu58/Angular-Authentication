import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginAuth: AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin ( loginForm: NgForm ): void {

    const email: string = loginForm.value.email
    const password: string = loginForm.value.password

    this.loginAuth.checkCredentials(email, password)
  }

}
