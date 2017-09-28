import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  heroes: Array<Object>;

  constructor(private marvelService: MarvelService) { }

  listHeroes(){
    this.marvelService.marvelCharacters()
    .then(heroes => this.heroes = heroes)
  }
  ngOnInit() {
    this.listHeroes();
  }

}
