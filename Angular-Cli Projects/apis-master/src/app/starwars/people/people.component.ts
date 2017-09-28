import { Component, OnInit } from '@angular/core';
import {StarwarsService } from '../../starwars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleArray :Array<Object>;

  constructor(private swapi : StarwarsService) { }

  getPeople(){
    this.swapi.swapiPeople()
      .then(peopleArray => this.peopleArray = peopleArray)
  }

  ngOnInit() {
    this.getPeople()
  }

}
