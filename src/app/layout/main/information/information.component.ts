import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeInAnimation } from '../../../animations/fade.animation';

@Component({
  moduleId: module.id.toString(),
  encapsulation: ViewEncapsulation.None,
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
