
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BannerService } from 'src/app/services/banners/banners.service';

export interface PeriodicElement {
  heading: string;
  description: string;
  url: string;
  imagePath: string;
  logoPath: string;
}

@Component({
  selector: 'app-show-banner',
  templateUrl: './show-banner.component.html',
  styleUrls: ['./show-banner.component.css'],
})
export class ShowBannerComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = ['heading', 'description', 'url', 'logoPath', 'imagePath',     'edit',
  'delete',];
  dataSource: PeriodicElement[] = []; 
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;

  constructor(
    private bannerService: BannerService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateData();
  }

  updateData() {

    this.subscription = this.bannerService.getBanners().subscribe({
      next: (data) => {
        this.imgCollection = data.banners;
        this.dataSource = this.imgCollection; 
        console.log(this.imgCollection);
      },
      error: (error) => {
        console.error('Error fetching banners:', error);
      },
    });
  }

  onDelete(bannerID: string) {
    this.bannerService.deleteBanner(bannerID).subscribe({
      next: (response) => {
        console.log('Banner Deleted', response);
        this.updateData(); 
      },
      error: (error) => {
        console.error('Unable to Delete', error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



// import { Component, Input, OnInit } from '@angular/core';
// import {
//   FormControl,
//   FormGroup,
//   Validators,
//   ValidationErrors,
//   FormBuilder,
// } from '@angular/forms';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { response } from 'express';
// import { Subscription } from 'rxjs';
// import { BannerService } from 'src/app/services/banners/banners.service';

// @Component({
//   selector: 'app-show-banner',
//   templateUrl: './show-banner.component.html',
//   styleUrls: ['./show-banner.component.css']
// })
// export class ShowBannerComponent implements OnInit {
//   imgCollection: any[] = [];

//   constructor(
//     private bannerService: BannerService,
//     public route: ActivatedRoute
//   ) {}
//   subscription: Subscription | undefined;

//   ngOnInit() {
//     this.updateData();
//   }

//   updateData() {
//     this.bannerService.getBanners().subscribe({
//       next: (data) => {
//         this.imgCollection = data.banners;
//         console.log(this.imgCollection)
//       },
//       error: (error) => {
//         console.error('Error fetching banners:', error);
//       },
//     });
//   }
  


//   onDelete(bannerID: string) {
//     this.bannerService.deleteBanner(bannerID).subscribe({
//       next: (response) => {
//         console.log('Banner Deleted', response);
//         this.updateData();
//       },
//       error: (error) => {
//         console.error('Unable to Delete', error);
//       },
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
// }
