import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '@core/_services/episodes.service';
import { CharactersService } from 'src/app/_services/characters.service';
import { Characters } from '@core/_models/characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public allCharacters: Characters;
  public currentPage:number
  public url:string = ''
  public showModal:boolean = false

  constructor(
    public characters: CharactersService,
    public episodes: EpisodesService
  ) { }

  ngOnInit(): void {
    this.currentPage = 1
    this.getCharacters()
  }

  getCharacters() {
    this.characters.allCharacters(this.currentPage)
    .subscribe({
      next: (data) => {
        data.results.map(chapter => {
          this.episodes.episodeDetail(chapter.episode[0])
          .subscribe(episode => chapter.firstEpisode = episode.name)
        })
        this.allCharacters = data
        },
        error: console.error
      })
  }

  nextPage() {
    this.currentPage > this.allCharacters.info.pages ? this.currentPage = 1 : this.currentPage = this.currentPage + 1
    this.getCharacters()
  }

  prevPage() {
    this.currentPage <= 0 ? this.currentPage = this.allCharacters.info.pages - 1 : this.currentPage = this.currentPage - 1
    this.getCharacters()
  }

  modal(url:string){
    this.showModal = true
    this.url = url
  }

  trackByItems(index:number, item:any): number {return item.id}

}
