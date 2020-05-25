import { NgModule } from '@angular/core';

import { CharactersRoutingModule } from "./characters-routing.module";
import { SharedModule } from "../shared/shared.module";

import { CharactersComponent } from './characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import {CharacterDetailComponent} from "./character-detail/character-detail.component";

@NgModule({
  declarations: [
    CharactersComponent,
    CharactersListComponent,
    CharacterDetailComponent],
  imports: [
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
