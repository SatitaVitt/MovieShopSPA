import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { JwtStorageService } from './jwt-storage.service';
import { User } from 'src/app/shared/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private apiService: ApiService, private jwtStorageService: JwtStorageService) { }

  login(userLogin: Login): Observable<boolean> {
    //get un/pw from login component and send that to the API (HTTP POST)
    //API will send back JWT token if un/pw is valid
    //once JWT is received from API, store token in localstorage
    return this.apiService.create('account/login',userLogin).pipe(
      map(response => {
        if(response){
          //store the token in local storage and return true
          this.jwtStorageService.saveToken(response.token);
          return true;
        }
        return false;
      })
    );
  }
  logout(){
    //just clear the token from localStorage (Delete the token)
    this.jwtStorageService.destoryToken();
  }

  // we need to get FirstName, LastName, userId, email from the Token's Payload 
  // so that we can show name on the Nav Header 
  // Angular needs to read the token and Decode it so that you get the information from token's payload 
  //https://github.com/auth0/angular2-jwt

  private decodeToken(): User{
    const token = this.jwtStorageService.getToken();
    if( !token || new JwtHelperService().isTokenExpired(token) ){
      this.logout();
      return null;
    }
    const decodedToken = new JwtHelperService().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }
  isLoggedIn(): boolean {
    const token = this.jwtStorageService.getToken();
    if( !token || new JwtHelperService().isTokenExpired(token) ){
      return false;
    }
    return true;
  }
  //method to get FirstName and LastName so that we show them in our Navigation 

  getUserFullName() : string {
    if(this.decodeToken != null) {
      const decodedData = this.decodeToken();
      const UserFullName = decodedData.family_name + ' ' + decodedData.given_name;
      return UserFullName;
    }
  }
}
