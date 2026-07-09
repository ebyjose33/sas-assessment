import { Component } from '@angular/core';
import { interval, map } from 'rxjs';
// import { outputFromObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-output-from-observable-child',
  templateUrl: './output-from-observable-child.component.html',
  styleUrls: ['./output-from-observable-child.component.scss']
})
export class OutputFromObservableChildComponent {

  counter$ = interval(1000).pipe(
    map(value => value +1)
  );

  // counterChange = outputFromObservable(this.counter$);

}
