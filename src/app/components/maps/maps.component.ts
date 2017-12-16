import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vtm-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  public mapTypeId = 'hybrid';

  public map: any = {
    title: 'Stonehenge',
    zoom: 18,
    lat: 51.178882019736214,
    lng: -1.8262149999999338
  };

  constructor() { }

  ngOnInit() {
  }

}
