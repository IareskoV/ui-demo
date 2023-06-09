import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  @Input()
  description: string = '';
  constructor() {}

  class = 'red';

  ngOnInit(): void {
    if (this.description.length > 100) {
      this.class = 'green';
    } else if (this.description.length > 50) {
      this.class = 'orange';
    }
  }
}
