import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/user']">User</a>
      <button (click)="onNavigate()">Go home</button>
    `
})
export class UserComponent {
  onNavigate() {
    this.router.navigate(['/']);
  }
  constructor(private router: Router) {

  }
}
