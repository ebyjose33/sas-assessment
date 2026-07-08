import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-take-until-destroyed',
  templateUrl: './take-until-destroyed.component.html',
  styleUrls: ['./take-until-destroyed.component.scss']
})
export class TakeUntilDestroyedComponent {

  constructor(){
    interval(1000)
    .pipe(
      takeUntilDestroyed()
    )
    .subscribe(value => {
      console.log(value);
    });
  }

}
