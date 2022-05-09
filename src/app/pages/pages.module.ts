import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@core/core/core.module';
import { SharedModule } from '@core/shared/shared.module';

import { CharactersComponent } from '@core/pages/characters/characters.component';
import { CharacterDetailComponent } from '@core/pages/character-detail/character-detail.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CoreModule,
    SharedModule
  ]
})

export class PagesModule { }
