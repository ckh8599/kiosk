import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [NgbCarouselConfig]
})
export class UserComponent implements OnInit {

  title = '경환';
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
