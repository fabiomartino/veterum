import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'vtm-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public today: number;
  constructor() {
    this.today = Date.now();
  }

  ngOnInit() { }

}
