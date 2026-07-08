import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { catchError, finalize, of } from 'rxjs';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.log("ERROR", error);
      }
    });
  }
}
