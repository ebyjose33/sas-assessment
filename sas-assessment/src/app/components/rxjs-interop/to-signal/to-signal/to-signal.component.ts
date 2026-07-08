import { Component } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, take, throwError } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-to-signal',
  templateUrl: './to-signal.component.html',
  styleUrls: ['./to-signal.component.scss']
})
export class ToSignalComponent {

  counterObs = interval(1000).pipe(
    take(5)
  );
  counter = toSignal(this.counterObs, {
    initialValue: 0,
    manualCleanup: true
  });

  // temp = toSignal(this.counterObs, {
  //   initialValue: { temp: 20},
  //   equal: (prev, curr) =>
  //     prev.temp === curr.temp
  // });

  subject = new BehaviorSubject('Angular');
  technology = toSignal(this.subject,
    {
      requireSync: true
    }
  )

  /////////////////Error and completion ////////////////////
  // user$: Observable<string> = throwError(
  //   () =>  new Error('Server Error')
  // );

  // user = toSignal(this.user$,
  //   {
  //     initialValue: "Loading"
  //   }
  // )

}
