import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authUser:any;
  provider: number;
  constructor(public af:AngularFire, private router:Router, private location: Location) {
  this.af.auth.subscribe((auth) => {this.authUser = auth; this.provider =auth.provider; console.log(auth);})
}

  ngOnInit() {
  }

  logOut(){
    this.af.auth.logout()
    .then(
      () =>{ this.location.replaceState('/');
            this.router.navigate(['login']);
    })
  }

}
