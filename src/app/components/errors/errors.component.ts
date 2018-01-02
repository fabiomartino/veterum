import { Component, OnInit } from '@angular/core';
// import slide in/out animation
import { slideInOutAnimation } from '../../_animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'vtm-errors',
  templateUrl: './errors.component.html',

  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],

  // attach the slide in/out animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class ErrorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
