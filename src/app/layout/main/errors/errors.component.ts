import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../../../animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'vtm-errors',
  templateUrl: './errors.component.html',
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class ErrorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
