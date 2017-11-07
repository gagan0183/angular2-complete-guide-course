import { Component, OnInit } from '@angular/core';
import {  HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.httpGet().subscribe(
      (data: any) => console.log(data)
    );
  }
}
