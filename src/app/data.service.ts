import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  sharedMethod(){
    console.log('Launched a shared method!')
  }

  getData() {
    return this.http.get('http://api.open-notify.org/astros.json');
  }
}
