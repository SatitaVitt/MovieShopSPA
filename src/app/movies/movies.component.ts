import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../core/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  /*movies:Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(){
    console.log(this.movies)
    this.movieService.getHighestGrossingMovies().subscribe(
      g => {
        this.movies = g;
      }
    );
  }*/
  id:number;
  movies:Movie[];
  movie:Movie;
  constructor(private movieService:MovieService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.getHighestGrossingMovies('movies/top').subscribe(
      m=>{
        this.movies = m;
        console.log(this.movies);
      }
    );
    // this.route.queryParams.subscribe(params=>this.id = params['id']);
    // if(this.id != undefined){
    //   this.movieService.getMovieById(this.id).subscribe(
    //     m=>this.movie = m
    //   );
    this.activeRoute.paramMap.subscribe(
      params => {
          this.id = +params.get('id');
      }
    );
    this.movieService.getMovieById(this.id).subscribe(
      m=>{
        this.movie = m;
        console.log(this.movie);
      }
    );

}
