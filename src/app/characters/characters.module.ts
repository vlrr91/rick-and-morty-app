import { NgModule } from '@angular/core';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CharactersComponent, CharactersListComponent],
  imports: [
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
