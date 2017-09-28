import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles : Array<Object>;

  constructor(private swapi: StarwarsService) { }

  getVehicles(){
      this.swapi.swapiVehicles()
        .then(vehicles => this.vehicles = vehicles)
  }

  ngOnInit() {
    this.getVehicles()
  }

}
