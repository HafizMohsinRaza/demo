import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router:Router){}


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  islogged(){
    return this.getToken() !== null;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['admin/account/login']);
  }

  Done(){
    this.setToken('123');
  }
}
