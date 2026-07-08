import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent {

    users: any[] = [];

  constructor(private userService: UserService) { }

   ngOnInit() {
     this.userService.getUsers4().subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
   }


}
