import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private switchField = true;

  switch() {
    this.switchField = !this.switchField;
  }
}
