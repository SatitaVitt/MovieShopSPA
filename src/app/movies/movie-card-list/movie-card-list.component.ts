import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {

  //it needs to read the id from url and call movie service 
  //that will call api service that will call our rest api to 
  //get the movies belong to the genre
  movies: Movie[];
  genreId : number;
  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.genreId = +params.get('id');
        // call Movie Service that will call API Service that will call our Rest API
  // to get the movies belong to the genre
        this.movieService.getMoviesByGenre(this.genreId).subscribe(
          m => {
            this.movies = m;
          }
        );
      }
    )
  }

}
