import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PokeService {

  constructor(private http: Http) { }

  getPokemonData(category){
    let url =`http://pokeapi.co/api/v2/${category}/`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
  }

}
