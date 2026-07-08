import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { catchError, finalize, of } from 'rxjs';


@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss']
})
export class FinalizeComponent {

  users: any[] = [];
  loading: boolean = false;

  constructor(private userService: UserService) { }

     ngOnInit() {
         this.loading = true;
    this.userService.getUsers4().
      pipe(
        finalize(() => {
          this.loading = false;
        })
      )
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
