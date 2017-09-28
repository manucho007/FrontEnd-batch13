import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarwarsService {

  constructor(private http : Http) { }

  swapiPeople(){
    let url ="http://swapi.co/api/people/";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
    }
  swapiFilms(){
    let url ="http://swapi.co/api/films/";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
    }
  swapiPlanets(){
    let url ="http://swapi.co/api/planets/";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
    }
  swapiStarships(){
    let url ="http://swapi.co/api/starships/";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
    }
  swapiVehicles(){
    let url ="http://swapi.co/api/vehicles/";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
    }

}
