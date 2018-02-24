import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../animations/index';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Veterum';
  }

  ngOnInit() { }

}
