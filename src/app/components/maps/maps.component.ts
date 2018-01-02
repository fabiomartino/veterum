import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import slide in/out animation
import { fadeInAnimation } from '../../_animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'vtm-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],

  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class MapsComponent implements OnInit {

  public map: any = {
    title: 'Stonehenge',
    zoom: 14,
    lat: 51.178882019736214,
    lng: -1.8262149999999338
  };

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'mapTypeId': 'hybrid'
    });
  }

}
