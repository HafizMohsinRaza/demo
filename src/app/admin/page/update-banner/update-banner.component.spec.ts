import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBannerComponent } from './update-banner.component';

describe('UpdateBannerComponent', () => {
  let component: UpdateBannerComponent;
  let fixture: ComponentFixture<UpdateBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBannerComponent]
    });
    fixture = TestBed.createComponent(UpdateBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
