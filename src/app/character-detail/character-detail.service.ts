import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICharacter } from '../shared/interfaces/character';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CharacterDetailService {
    private characterUrl = 'https://rickandmortyapi.com/api/character/';

    constructor(private http: HttpClient) {}

    getCharacter(id: number): Observable<ICharacter> {
        const url = `${this.characterUrl}${id}`;
        return this.http.get<ICharacter>(url).pipe(
            catchError(this.handleError)
        );
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
