import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers1()
      .subscribe(users => {
        console.log(users)
      });
  }

}
