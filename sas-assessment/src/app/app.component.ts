import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sas-assessment';
  showVariable: any = '';
  // users: any[] = [];
  // loading: boolean = false;
  // errorMessage: any = '';

  // constructor(private userService: UserService) { }
  // ngOnInit() {
  //   ////////////////// Basic http request //////////////////

  //   this.userService.getUsers().subscribe({
  //     next: (response) => {
  //       this.users = response;
  //     },
  //     error: (error) => {
  //       console.log("ERROR", error);
  //     }
  //   });

  //   ////////////////// catchError //////////////////

  //   this.userService.getUsers1()
  //     .subscribe(users => {
  //       console.log(users)
  //     });

  //   ////////////////// throwError //////////////////

  //   this.userService.getUsers2()
  //     .subscribe({
  //       next: data => {
  //         console.log(data);
  //       },
  //       error: error => {
  //         console.log(error.message)
  //       }
  //     })

  //   ////////////////// retry //////////////////

  //   this.userService.getUsers3()
  //     .subscribe({
  //       next: data => {
  //         console.log(data);
  //       },
  //       error: error => {
  //         console.log(error);
  //       }
  //     })

  //   ////////////////// retryWhen //////////////////

  //   this.userService.getUsers4().subscribe({
  //     next: data => {
  //       console.log(data);
  //     },
  //     error: error => {
  //       console.log(error);
  //     }
  //   })

  //   this.loadUsers();
  //   this.loadData();


  // }

  // ////////////////// finalize //////////////////
  // loadUsers() {
  //   this.loading = true;
  //   this.userService.getUsers4().
  //     pipe(
  //       finalize(() => {
  //         this.loading = false;
  //       })
  //     )
  //     .subscribe({
  //       next: data => {
  //         console.log(data);
  //       },
  //       error: error => {
  //         console.log(error);
  //       }
  //     })
  // }

  // ////////////////// Combined //////////////////
  // loadData() {
  //   this.loading = true;
  //   this.userService.getUsers5()
  //     .pipe(
  //       finalize(() => {
  //         this.loading = false;
  //         console.log("Request completed");
  //       })
  //     )
  //     .subscribe({
  //       next: response => {
  //         this.users = response;
  //       },
  //       error: error => {
  //         console.log(error)
  //         this.errorMessage = error.message;
  //       }
  //     })
  // }
  showMethod (type: string) {
    this.showVariable = type;
  }
}