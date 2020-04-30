import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(){
    console.log(this.movies)
    this.movieService.getHighestGrossingMovies().subscribe(
      g => {
        this.movies = g;
      }
    );
  }

}
