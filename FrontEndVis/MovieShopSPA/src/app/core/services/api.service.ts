import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(protected http: HttpClient) { }

  //CRUD http methods
  //getALL - returning array of items -- GET
  //getOne - return one item ----------- GET
  //create - sending data to API ------- POST
  //update - updating a resource ------- PUT
  //delete - deleting a resource ------- DELETE
  //API URL - http://localhost:44312/api/genres, http://localhost:44312/api/movies/29
  //GenreService - getALLGenres() - APIService - getAll()
  //GenreService - getAllGenres() - Observable<Genre[]>
  //MovieService - getTopRevenueMovies() - Observable<Movie[]>
  //Models
  //list.where(x=>x.id = 2).select(y => new {y.id, y.name})/toList()
  //chaining method using .
  //map can chain method using , and pipe method

  getAll(path: string): Observable<any[]>{
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp=> resp as any[])
    )
 }
  getOne(path: string, id?: number): Observable<any>{
    return this.http.get(`${environment.apiUrl}${path}${id}`).pipe(
      map(resp=> resp as any)
    )
  }
  getHighest(): Observable<any[]>{
    return this.http.get(`${environment.apiUrl}movie`).pipe(
      map(resp=> resp as any)
    )
  }
  /*
  getList(path: string): Observable<any[]>{
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp=> resp as any[])
    )
  }
*/
}
