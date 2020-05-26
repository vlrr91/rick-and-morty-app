import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ICharacter } from "../../shared/interfaces/character";
import {Observable, of} from "rxjs";
import {CharactersService} from "../characters.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailResolver implements Resolve<ICharacter>{

  constructor(private dataService: CharactersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      return of(undefined);
    } else {
      return this.dataService.getCharacterById(+id);
    }
  }
}
