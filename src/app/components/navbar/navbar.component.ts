import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vtm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
