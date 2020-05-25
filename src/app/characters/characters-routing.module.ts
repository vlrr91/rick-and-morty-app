import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { CharactersComponent } from "./characters.component";
import { CharactersListComponent } from "./characters-list/characters-list.component";
import {CharacterDetailComponent} from "./character-detail/character-detail.component";

const routes: Route[] = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      {
        path: '',
        redirectTo: 'pages/1',
        pathMatch: 'full'
      },
      {
        path: 'pages/:number',
        component: CharactersListComponent
      },
      {
        path: ':id',
        component: CharacterDetailComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
