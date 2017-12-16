import { Component } from '@angular/core';

@Component({
  selector: 'vtm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Veterum';
  lat: number = 51.178882019736214;
  lng: number = -1.8262149999999338;

}
