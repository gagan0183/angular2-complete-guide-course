import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  httpGet() {
    return this.http.get('https://angular-c5649.firebaseio.com/title.json')
            .map((response: Response) => response.json());
  }

  post(user: any) {
    const body = user;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://angular-c5649.firebaseio.com/senddata.json', body, {
      headers: headers
    })
    .map((data) => data.json());
  }
}
