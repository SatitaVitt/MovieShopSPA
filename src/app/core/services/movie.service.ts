import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //constructor(private apiService:ApiService) { }
  constructor(protected http: HttpClient, private apiService: ApiService) { }

  getHighestGrossingMovies(): Observable<Movie[]>{
    /*return this.apiService.getHighest();*/
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    );
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
