import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';


const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'detail/:id', component: CharacterDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } //404
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
