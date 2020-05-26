import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

import { ResponseApi } from "../../shared/interfaces/response-api";
import { DataService } from "../data.service";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CharactersListResolver implements Resolve<ResponseApi>{
  constructor(private dataService: DataService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseApi> {
    const page = route.paramMap.get('number');
    if (isNaN(+page)) {
      this.router.navigate(['/characters/pages', '1']);
    } else {
      return this.dataService.getDataApi(page);
    }
  }
}
