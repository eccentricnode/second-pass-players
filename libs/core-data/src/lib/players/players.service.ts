import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://level-up-api-varwfvewcd.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  model = `players`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }
  
  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map(res => res));
  }

  create(player) {
    return this.http.post(this.getUrl(), player);
  }

  update(player) {
    return this.http.patch(this.getUrlForId(player.id), player);
  }

  delete(playerId) {
    return this.http.delete(this.getUrlForId(playerId));
  }
}
