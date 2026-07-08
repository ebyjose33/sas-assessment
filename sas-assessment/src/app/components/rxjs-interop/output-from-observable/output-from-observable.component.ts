import { Component } from '@angular/core';

@Component({
  selector: 'app-output-from-observable',
  templateUrl: './output-from-observable.component.html',
  styleUrls: ['./output-from-observable.component.scss']
})
export class OutputFromObservableComponent {
  counter = 0;

  updateCounter(value: number) {
    this.counter = value;
  }

}
