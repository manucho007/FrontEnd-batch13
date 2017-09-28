import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LyricService {

  constructor(private http : Http) { }

  getTrackList(lyric){
    let url =`http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyric}&apikey=531013ec890c02f5924104f2543205b7&format=json&f_has_lyrics=1&callback=jsonp_callback`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().message.body.track_list)
    }

    getTrack(name){
      let url =`https://api.spotify.com/v1/search?q=${name}&type=track`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().tracks.items)
      }

}
