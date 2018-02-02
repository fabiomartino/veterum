import { Component, TemplateRef, HostListener, HostBinding, OnInit } from '@angular/core';
import { collapseAnimation } from '../../animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'vtm-navbar',
  templateUrl: './navbar.component.html',
  animations: [collapseAnimation]
})
export class NavbarComponent implements OnInit {
  public navbarCollapsed: boolean;
  public _navbarCollapsedAnim: string;

  constructor() {
    this.navbarCollapsed = true;
    this._navbarCollapsedAnim = 'closed';
  }

  ngOnInit() {
    this.onResize(window);
  }
  @HostListener('window:resize', ['$event.target'])
  onResize(event) {
    if (event.innerWidth > 990) {
      // need to set this to 'open' for large screens to show up because of opacity in 'closed' animation.
      this._navbarCollapsedAnim = 'open';
    } else {
      // comment this line if you don't want to collapse the navbar when window is resized.
      this._navbarCollapsedAnim = 'closed';
    }
    this.navbarCollapsed = true;
  }

  public toggleNavbar(): void {
    if (this.navbarCollapsed) {
      this._navbarCollapsedAnim = 'open';
      this.navbarCollapsed = false;
    } else {
      this._navbarCollapsedAnim = 'closed';
      this.navbarCollapsed = true;
    }
  }

  public get collapseNavbar(): string {
    return this._navbarCollapsedAnim;
  }
}
