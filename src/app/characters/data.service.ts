import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ResponseApi} from "../shared/interfaces/response-api";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private charactersUrl = 'https://rickandmortyapi.com/api/character/?page=';

    constructor(private http: HttpClient) {}

    getDataApi(page: string): Observable<ResponseApi> {
      return this.http.get<any>(this.charactersUrl + page).pipe(
        map(data => {
          const { info, results } = data;
          const { count, pages, next, prev } = info;
          const charactersPerPage = results.map(result => ({
            id: result.id,
            name: result.name,
            species: result.species,
            gender: result.gender,
            origin: result.origin,
            image: result.image
          }));
          return {
            count,
            pages,
            next,
            prev,
            charactersPerPage
          }
        }),
        catchError(DataService.handleError),
      )
    }

    private static  handleError(err: HttpErrorResponse) {
        console.log(err);
        if (err.error instanceof ErrorEvent) {
          return throwError(`An error occurred: ${err.error.message}`);
        } else {
          return throwError(`Server returned error ${err}`);
        }
    }
}
