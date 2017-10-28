import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private switch = true;
  private items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private value = 90;

  onSwitch() {
    this.switch = !this.switch;
  }
}
