import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'vtm-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  public mapTypeId = 'hybrid';

  public map: any = {
    title: 'Stonehenge',
    zoom: 12,
    lat: 51.178882019736214,
    lng: -1.8262149999999338
  };

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'mapTypeId': 'hybrid'
    });
  }

}
