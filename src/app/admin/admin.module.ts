import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './accounts/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AdminDashboardComponent } from './page/admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { BodyComponent } from './component/body/body.component';
import { HomeComponent } from './page/home/home.component';
import { SublevelMenuComponent } from './component/sidenav/sublevel-menu.component';
import { HomeBannerComponent } from './page/home-banner/home-banner.component';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { CreateBannerComponent } from './component/create-banner/create-banner.component';
import { ShowBannerComponent } from './component/show-banner/show-banner.component';
import { UpdateBannerComponent } from './page/update-banner/update-banner.component';
@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    SidenavComponent,
    BodyComponent,
    HomeComponent,
    SublevelMenuComponent,
    HomeBannerComponent,
    CreateBannerComponent,
    ShowBannerComponent,
    UpdateBannerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatMenuModule,
    NgFor,
    NgIf,
    MatTableModule
    // BrowserAnimationsModule
  ]
})
export class AdminModule { }
