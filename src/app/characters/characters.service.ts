import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ResponseApi } from "../shared/interfaces/response-api";
import { ICharacter } from "../shared/interfaces/character";

@Injectable({
    providedIn: 'root'
})
export class CharactersService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getDataApi(page: string): Observable<ResponseApi> {
    return this.http.get<any>(`${this.baseUrl}/?page=${page}`).pipe(
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
      catchError(CharactersService.handleError),
    )
  }

  getCharacterById(id: number): Observable<ICharacter> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ICharacter>(url).pipe(
      catchError(CharactersService.handleError)
    );
  }

  private static handleError(err: HttpErrorResponse) {
      console.dir(err);
      if (err.error instanceof ErrorEvent) {
        return throwError(`An error occurred: ${err.error.message}`);
      } else {
        if (err.status === 404) {
          return of(undefined);
        }
        return throwError(`Server returned error ${err.message}`);
      }
  }
}
