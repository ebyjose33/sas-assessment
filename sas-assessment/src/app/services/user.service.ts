import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, Observable, of, retry, retryWhen, take, throwError, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users1'
  constructor(private http: HttpClient) { }

////////////////// Basic http request //////////////////

  getUsers(): Observable<any> {
    return this.http.get(
      this.apiUrl
    );
  }

  ////////////////// catchError //////////////////

    getUsers1() {
      return this.http.get(
      this.apiUrl
      ).pipe(
        catchError(error => {
          console.log("API Failed");
          return of ([]);         
        })
      )
    }

  ////////////////// throwError //////////////////

    getUsers2() {
      return this.http.get(
      this.apiUrl
      )
      .pipe(
        catchError(error => {
          return throwError(
            () => new Error("Unable to fetch users")
          );
        })
      );
    }

  ////////////////// retry //////////////////
      getUsers3() {
        return this.http.get(
      this.apiUrl
        )
        .pipe(
          retry(3)
        );
      }

  ////////////////// retryWhen //////////////////
      
      getUsers4() {
        return this.http.get(
      this.apiUrl
        )
        .pipe(
          retryWhen(error => {
            return error.pipe(
              delay(2000),
              take(3)
            )
          })
        )
      }

    ////////////////// Combined //////////////////
    getUsers5(): Observable<any[]>{
      return this,this.http.get<any[]>(
      this.apiUrl
      )
      .pipe(
        retry ({
          count: 3,
          delay: (error) => {
            console.log('Retrying...', error.status);
            return timer(2000);
          }
        }),
          // Handle the error after all retries fail
          catchError(error => {
            console.error('API Error:', error);
            return throwError(() => 
              new Error('Unable to fetch users. Please try again later.')
            );
          })
      )
    }

}
