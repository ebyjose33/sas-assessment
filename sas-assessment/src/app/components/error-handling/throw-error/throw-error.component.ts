import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { catchError, finalize, of } from 'rxjs';


@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent {

    users: any[] = [];

  constructor(private userService: UserService) { }

    ngOnInit() {
       this.userService.getUsers2()
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          console.log(error.message)
        }
      })
    }

}
