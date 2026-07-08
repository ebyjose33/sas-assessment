import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-interop',
  templateUrl: './rxjs-interop.component.html',
  styleUrls: ['./rxjs-interop.component.scss']
})
export class RxjsInteropComponent {
  showVariable:any ='';

  showMethod(type: string) {
    this.showVariable = type;
  }

}
