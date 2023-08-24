import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { AdminDashboardComponent } from './page/admin-dashboard/admin-dashboard.component';
import { authGuard } from '../guard/auth.guard';
import { HomeComponent } from './page/home/home.component';
import { HomeBannerComponent } from './page/home-banner/home-banner.component';
import { ShowBannerComponent } from './component/show-banner/show-banner.component';
import { CreateBannerComponent } from './component/create-banner/create-banner.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/login',
    pathMatch: 'full',
  },
  { path: 'account/login', component: LoginComponent },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'home-banner',
        component: HomeBannerComponent,
        children: [
          { path: '', redirectTo: 'show-banner', pathMatch: 'full' },
          { path: 'show-banner', component: ShowBannerComponent },
          
          { path: 'create-banner', component: CreateBannerComponent },
          { path: 'edit-banner/:bannerId', component: CreateBannerComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
