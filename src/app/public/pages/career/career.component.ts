import { Component, HostListener } from '@angular/core';
import { CenteredContainerService } from 'src/app/centered-container-service.service';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  showScrollButton: boolean = false;

  constructor(private centeredContainerService: CenteredContainerService) { }

  showCenteredContainer(positionTitle: string): void {
    this.centeredContainerService.showContainerPopup(true, positionTitle);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY >= 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
