import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersHomeComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: '**',
    redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
