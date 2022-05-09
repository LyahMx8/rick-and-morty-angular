import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@core/_models/character.model';
import { Observable } from 'rxjs';
import { Characters } from '../_models/characters.model';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  allCharacters(page:number): Observable<Characters> {
    return this.http.get<Characters>(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }

  filterCharacters(name:string, status:string, species:string, type:string, gender:string): Observable<Characters> {
    return this.http.get<Characters>(
      `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`
    )
  }

  characterDetail(id:number): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }

  lastUbication(url:string): Observable<[]> {
    return this.http.get<[]>(url)
  }
}
