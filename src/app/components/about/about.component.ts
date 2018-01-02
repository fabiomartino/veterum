import { Component, OnInit } from '@angular/core';
// import slide in/out animation
import { fadeInAnimation } from '../../_animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'vtm-about',
  templateUrl: './about.component.html',

  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
