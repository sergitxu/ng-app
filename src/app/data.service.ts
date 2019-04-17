import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  sharedMethod() {
    return console.log('patatuca');
  }
}
