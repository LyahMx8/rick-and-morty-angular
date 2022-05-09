import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@core/_models/character.model';
import { CharactersService } from '@core/_services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public id: number;
  public character: Character;

  constructor(
    public characters: CharactersService,
		private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getCharacters()
  }

  getCharacters() {
    this.characters.characterDetail(this.id)
      .subscribe({
        next: (data) => {
          this.character = data
          console.log(this.character)
        },
        error: console.error
      })
  }

}
