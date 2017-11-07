import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  httpGet() {
    return this.http.get('https://angular-c5649.firebaseio.com/title.json')
            .map((response: Response) => response.json());
  }
}
