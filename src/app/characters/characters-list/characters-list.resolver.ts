import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import {Observable, of } from "rxjs";

import { ResponseApi } from "../../shared/interfaces/response-api";
import { DataService } from "../data.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersListResolver implements Resolve<ResponseApi>{
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseApi> {
    const page = route.paramMap.get('number');
    if (isNaN(+page)) {
      return of(undefined);
    } else {
      return this.dataService.getDataApi(page);
    }
  }
}
