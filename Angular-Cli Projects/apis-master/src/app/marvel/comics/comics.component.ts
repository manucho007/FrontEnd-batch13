import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics : Array<Object>;

  constructor(private marvelapi : MarvelService) { }

  getComics(){
    this.marvelapi.marvelComics()
    .then(comics => this.comics = comics)
  }

  ngOnInit() {
    this.getComics();
  }

}
