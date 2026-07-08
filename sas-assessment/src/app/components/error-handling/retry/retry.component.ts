import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { catchError, finalize, of } from 'rxjs';


@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {

    users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userService.getUsers3()
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          console.log(error);
        }
      })
  }

}
