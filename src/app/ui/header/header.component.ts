import { Component, OnInit } from '@angular/core';

import { heightSlideDownAnimation } from './../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ heightSlideDownAnimation ]
})
export class HeaderComponent implements OnInit {

  public showBookForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
