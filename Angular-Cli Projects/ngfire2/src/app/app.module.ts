import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { routing,appRoutingProvides } from './app.routing';


// const myfirebaseConfig={
//     apiKey: "AIzaSyDr2jjWl-u4apDi2srExyPnH8mhD268ACo",
//     authDomain: "ngfire2-fe528.firebaseapp.com",
//     databaseURL: "https://ngfire2-fe528.firebaseio.com",
//     storageBucket: "ngfire2-fe528.appspot.com",
//     messagingSenderId: "687344353509"
// };
const myfirebaseConfig={
    apiKey: "AIzaSyD7bE0OxkT5Xj3mjBThm498Eeh_Q6oDctw",
    authDomain: "ngfirebase-d812f.firebaseapp.com",
    databaseURL: "https://ngfirebase-d812f.firebaseio.com",
    storageBucket: "ngfirebase-d812f.appspot.com",
    messagingSenderId: "1065035923088"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myfirebaseConfig),
    routing
  ],
  providers: [appRoutingProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }
