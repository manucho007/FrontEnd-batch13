import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Array<Object>;
  constructor(private swapi : StarwarsService) { }

  getFilms(){
    this.swapi.swapiFilms()
      .then(films => this.films = films)
  }

  ngOnInit() {
    this.getFilms()
  }

}
