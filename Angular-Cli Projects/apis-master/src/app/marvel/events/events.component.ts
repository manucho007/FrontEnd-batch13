import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../marvel.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private marvelapi : MarvelService) { }
  events: Array<Object>;

  getEventsMarvel(){
    this.marvelapi.marvelEvents()
    .then(events => this.events = events)
  }

  ngOnInit() {
    this.getEventsMarvel()
  }

}
