import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af:AngularFire, private location: Location, private router:Router) { }

  loginGoogle(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(
      ()=>{this.location.replaceState('/');
        this.router.navigate(['home'])
      }
    )
  }

  loginFacebook(){
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(
      ()=>{this.location.replaceState('/');
        this.router.navigate(['home'])
      }
    )
  }

  loginTwitter(){
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }).then(
      ()=>{this.location.replaceState('/');
        this.router.navigate(['home'])
      }
    )
  }
  loginGithub(){
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    }).then(
      ()=>{this.location.replaceState('/');
        this.router.navigate(['home'])
      }
    )
  }

  ngOnInit() {
  }

}
