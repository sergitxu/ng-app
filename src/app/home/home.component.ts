import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Gray: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  firstClick() {
    this.data.sharedMethod();
  }

}
