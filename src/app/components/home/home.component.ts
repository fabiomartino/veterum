import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vtm-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = '';

  constructor() {
    this.title = 'Veterum';
  }

  ngOnInit() {
  }

}
