import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.css']
})
export class BerriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() berries

}
