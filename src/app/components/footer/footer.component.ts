import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vtm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public today: number;
  constructor() {
    this.today = Date.now();
  }

  ngOnInit() { }

}
