import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private auth:AuthService,private router:Router) { }

  logout(){
    this.auth.logout();
    this.router.navigate(['admin/account/login']);
  }
  isSideNavCollapsed = false;
  screenwidth =0 ;
  onToggleSideNav(data:SideNavToggle){
    this.isSideNavCollapsed = data.collapsed;
    this.screenwidth = data.screenwidth;
  }
}
