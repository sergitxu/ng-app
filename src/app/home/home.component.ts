import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Gray: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    if(this.h1Gray === false) {
      this.h1Gray = true;
    } else {
      this.h1Gray = false;
    }
  }

}
