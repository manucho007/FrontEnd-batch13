import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../marvel.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series : Array<Object>;
  constructor(private marvelapi : MarvelService) { }

  getSeries(){
    this.marvelapi.marvelSeries()
      .then(series => this.series = series)
  }

  ngOnInit() {
    this.getSeries()
  }

}
