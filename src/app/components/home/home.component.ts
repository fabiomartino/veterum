import { Component, OnInit } from '@angular/core';
// import slide in/out animation
import { fadeInAnimation } from '../../_animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'vtm-home',
  templateUrl: './home.component.html',

  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
  title = '';

  constructor() {
    this.title = 'Veterum';
  }

  ngOnInit() {
  }

}
