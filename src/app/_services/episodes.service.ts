import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '@core/_models/episode.model';

@Injectable({
  providedIn: 'root'
})

export class EpisodesService {

  constructor(
    private http: HttpClient
  ) { }

  episodeDetail(link:string): Observable<Episode> {
    return this.http.get<Episode>(link)
  }
}
