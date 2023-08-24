import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email: string = '';
  password: string = '';
  state: boolean = false;
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
    if(this.auth.islogged()){
      this.router.navigate(['admin/dashboard']);
    }
  }

  login(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    if (this.email === 'admin@gmail.com' && this.password === '123') {
      this.auth.Done();
      this.router.navigate(['admin/dashboard']);
    }
  }
}
