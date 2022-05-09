import { Component, Input, OnChanges } from '@angular/core';
import { CharactersService } from 'src/app/_services/characters.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {
  @Input() url:string = ''
  public location: any

  constructor(
    public characters: CharactersService
  ) { }

  ngOnChanges() {
    this.getLocation()
  }

  getLocation() {
    if(this.url != ''){
      this.characters.lastUbication(this.url)
      .subscribe({
        next: (data) => {
          this.location = data
          console.log(data)
        },
        error: console.error
        })
    }
  }

}
