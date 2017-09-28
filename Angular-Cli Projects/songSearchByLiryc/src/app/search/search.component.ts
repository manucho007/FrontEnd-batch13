import { Component, OnInit } from '@angular/core';
import { LyricService } from '../lyric.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name :string;
  tracks :Array<Object>;
  results : Array<Object>;
  srcSong : any;
  _audio:any;
  _audiosrc:any;
  constructor(private musicMatch : LyricService) { }

  ngOnInit() {
  }

  buscar(){
    this.musicMatch.getTrackList(this.name)
      .then(tracks => {this.tracks = tracks;})
  }

  reproducir(song,artist){
    this.musicMatch.getTrack(song)
      .then(results => {this.results = results;
        this.srcSong= results[0].preview_url;
        this.play(this.srcSong);
      });
  }

  play(src){
    this._audio = new Audio();
    this._audio.src = src;
    this._audio.play();
  }


}
