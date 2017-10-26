import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">clic me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('event') clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('in the function');
  }
}
