import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/rx';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  param: string;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
