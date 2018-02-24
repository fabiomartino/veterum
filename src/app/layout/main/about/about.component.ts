import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../animations/index';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
