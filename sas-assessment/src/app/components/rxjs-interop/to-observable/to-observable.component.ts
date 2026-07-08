import { Component, signal  } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-to-observable',
  templateUrl: './to-observable.component.html',
  styleUrls: ['./to-observable.component.scss']
})
export class ToObservableComponent {

  count = signal(0);
  count$ = toObservable(this.count);

  constructor() {
    this.count$.subscribe(value => {
      console.log("Observable value:", value)
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1)
  }
}
