(function(){
  'use strict';
   angular
   .module("myApp",[])
   .controller("myCtrl",myCtrl);

   function myCtrl(){
     var vm = this;
     vm.movies = [
                   {"title": "Stars Wars", "year" : 1977, "director" : "George Lucas", "escritor": "George Lucas" ,img:"https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
                   {"title": "Ghost in the Shell", "year" : 2017, "director" : "Rupert Sanders", "escritor": "Jamie Moss ,Masamune Shirow, Jonathan Herman", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNzAyMjQxMV5BMl5BanBnXkFtZTgwNzk4NjYyMTI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
                   {"title": "RINGS", "year" : 2017, "director" : "R F. Javier Gutiérrez", "escritor": "David Loucka , Jacob Estes ", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BNjU1NDAxNTg0MF5BMl5BanBnXkFtZTgwNzUxMjEwMTI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
                   {"title": "Split", "year" : 2016, "director" : "M. Night Shyamalan", "escritor": "M. Night Shyamalan", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg"},
                   {"title": "Resident Evil: The Final Chapter", "year" : 2016, "director" : "Paul W.S. Anderson", "escritor": "Paul W.S. Anderson", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_UX182_CR0,0,182,268_AL_.jpg"}
                  ]
   }
})();
//IFFE
