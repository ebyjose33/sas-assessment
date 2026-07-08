import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { catchError, finalize, of } from 'rxjs';


@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.scss']
})
export class CombinedComponent {

  users: any[] = [];
  loading: boolean = false;
  errorMessage: any = '';


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers5()
      .pipe(
        finalize(() => {
          this.loading = false;
          console.log("Request completed");
        })
      )
      .subscribe({
        next: response => {
          this.users = response;
        },
        error: error => {
          console.log(error)
          this.errorMessage = error.message;
        }
      })
  }


}
