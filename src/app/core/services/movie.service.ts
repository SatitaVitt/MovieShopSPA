import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService:ApiService) { }

  getHighestGrossingMovies(): Observable<Movie[]>{
    return this.apiService.getHighest();
  }

  getMovieById(id: number): Observable<Movie>{
    return this.apiService.getOne('movies/1', id);
  }

  getMoviesByGenre(genreId: number): Observable<Movie[]>{
    return this.apiService.getAll(`${'movies/genre/'}${genreId}`);
  }
  getMovieDetails(id: number): Observable<Movie[]>{
    return this.apiService.getOne('movies/1', id);
  }

}
