import { Component, OnInit } from '@angular/core';
import {StarwarsService } from '../../starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships : Array<Object>;
  constructor(private swapi : StarwarsService) { }

  getStarships(){
    this.swapi.swapiStarships()
      .then(starships => this.starships =starships)
  }

  ngOnInit() {
    this.getStarships()
  }

}
