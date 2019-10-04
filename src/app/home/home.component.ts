import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Gray = false;

  cosmonauts: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.cosmonauts = data;
      console.log(data);
    });
  }

  firstClick() {
    this.data.sharedMethod();
  }

}
