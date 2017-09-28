import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets : Array<Object>;
  constructor(private swapi: StarwarsService) { }

  getPlanets(){
    this.swapi.swapiPlanets()
      .then(planets => this.planets = planets)
  }

  ngOnInit() {
    this.getPlanets();
  }

}
