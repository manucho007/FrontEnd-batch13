import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../marvel.service';
@Component({
  selector: 'app-charactes',
  templateUrl: './charactes.component.html',
  styleUrls: ['./charactes.component.css']
})

export class CharactesComponent implements OnInit {
  characters : Array<Object>;
  constructor(private marvelapi : MarvelService) { }

  listCharacters(){
    this.marvelapi.marvelCharacters()
      .then(characters => this.characters = characters)
  }

  ngOnInit() {
    this.listCharacters()
  }

}
