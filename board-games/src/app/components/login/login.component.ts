import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorLogin:boolean = false;
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')    
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.loginService.logIn(credentials.userName, credentials.password).subscribe( 
      () => { this.router.navigate(['games-list']); }, 
      () => { this.errorLogin = true; }
    );
  }
}