import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class MarvelService {

  constructor(private http: Http) { }

  marvelCharacters(){
    let url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=cd610d56ee03be3a21d2153d09049058&hash=7fbd146bd057401df720b3fe57c71bdb";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data.results)
    }
  marvelComics(){
    let url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=cd610d56ee03be3a21d2153d09049058&hash=7fbd146bd057401df720b3fe57c71bdb";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data.results)
    }
  marvelSeries(){
    let url ="http://gateway.marvel.com/v1/public/series?ts=1&apikey=cd610d56ee03be3a21d2153d09049058&hash=7fbd146bd057401df720b3fe57c71bdb";
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data.results)
  }

  marvelEvents(){
    let url ="http://gateway.marvel.com/v1/public/events?ts=1&apikey=cd610d56ee03be3a21d2153d09049058&hash=7fbd146bd057401df720b3fe57c71bdb";
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data.results)
  }

  private oneError(error:any){
    console.log(`Error ${error} al consumir la API`);
    return Promise.reject(error.message || error);
  }

}
