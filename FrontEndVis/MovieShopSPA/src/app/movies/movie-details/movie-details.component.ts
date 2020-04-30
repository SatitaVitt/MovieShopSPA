import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId : number;
  movie : Movie[];
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param=>{
        this.movieId = +param.get('id');
        
        this.movieService.getMovieDetails(this.movieId).subscribe(
          m=>{
            this.movie = m;
          }
        );
        console.log(this.movie);
      }
    )
  }
/*
  private getMovieDetails(){
    this.movieService.getMovieDetails(this.movieId).subscribe(
      m=>{
        this.movie = m;
      }
    );
  }
*/
}
