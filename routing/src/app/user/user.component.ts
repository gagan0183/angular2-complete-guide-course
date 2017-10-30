import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/rx';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go home</button>
      {{id}}
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent {
  private subscription: Subscription;

  private id: string;

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 9}});
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
