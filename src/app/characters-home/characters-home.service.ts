import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CharactersHomeService {
    private charactersUrl = 'https://rickandmortyapi.com/api/character/?page=';

    constructor(private http: HttpClient) {}

    getData(page: number): Observable<any> {
      return this.http.get<any>(this.charactersUrl + page).pipe(
        catchError(this.handleError),
      )
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error ocurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}