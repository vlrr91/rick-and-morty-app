import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from "./characters.component";
import { CharactersListComponent } from "./characters-list/characters-list.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CharactersComponent,
        children: [
          {
            path: 'pages/:number',
            component: CharactersListComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
