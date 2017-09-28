import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';

//child Components
import {PokemonsComponent } from './pokemons/pokemons.component';
import {BerriesComponent } from './pokemons/berries.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons : Array<Object>;
  berries : Array<Object>;

  constructor(private pokeapi : PokeService) { }

  getPokemons(){
    this.pokeapi.getPokemonData('pokemon')
      .then(pokemons => this.pokemons = pokemons)
  }
  getBerries(){
    this.pokeapi.getPokemonData('berries')
      .then(berries => this.berries = berries)
  }
  ngOnInit() {
    this.getPokemons()
    this.getBerries()
  }

}
