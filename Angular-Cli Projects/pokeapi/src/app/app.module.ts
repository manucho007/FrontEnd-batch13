import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PokeService}  from './poke.service';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pokemon/pokemons/pokemons.component';
import { BerriesComponent } from './pokemon/berries/berries.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonsComponent,
    NavbarComponent,
    BerriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
