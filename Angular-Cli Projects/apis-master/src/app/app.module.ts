import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//components
import { MarvelComponent } from './marvel/marvel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { CharactesComponent } from './marvel/charactes/charactes.component';
import { ComicsComponent } from './marvel/comics/comics.component';
import { SeriesComponent } from './marvel/series/series.component';
import { EventsComponent } from './marvel/events/events.component';
import { PeopleComponent } from './starwars/people/people.component';
import { PlanetsComponent } from './starwars/planets/planets.component';
import { VehiclesComponent } from './starwars/vehicles/vehicles.component';
import { FilmsComponent } from './starwars/films/films.component';
import { StarshipsComponent } from './starwars/starships/starships.component';
import { MainComponent } from './main/main.component';

//Services
import { MarvelService } from './marvel.service';
import { StarwarsService } from './starwars.service';



const Approutes: Routes=[
  {path:'',component: MainComponent},
  {path:'starwars',component: StarwarsComponent},
  {path:'marvel',component: MarvelComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    NavbarComponent,
    StarwarsComponent,
    CharactesComponent,
    ComicsComponent,
    SeriesComponent,
    EventsComponent,
    PeopleComponent,
    PlanetsComponent,
    VehiclesComponent,
    FilmsComponent,
    StarshipsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [MarvelService,StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
