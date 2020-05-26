import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from "@angular/router";
import { ICharacter } from "../../shared/interfaces/character";
import { Observable } from "rxjs";
import {DataService} from "../data.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailResolver implements Resolve<ICharacter>{

  constructor(private dataService: DataService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      this.router.navigate(['/characters']);
    } else {
      return this.dataService.getCharacterById(+id);
    }
  }
}
