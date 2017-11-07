import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  httpGet() {
    return this.http.get('https://angular-c5649.firebaseio.com/title.json');
  }
}
