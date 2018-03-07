import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { slideInOutAnimation } from '../../../animations/index';

@Component({
  moduleId: module.id.toString(),
  encapsulation: ViewEncapsulation.None,
  selector: 'vtm-errors',
  templateUrl: './errors.component.html',
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class ErrorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
