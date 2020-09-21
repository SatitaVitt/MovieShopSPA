import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //first call the isLoggedIn method from Auth Service and see if user is logged in 
  //if he is logged in then hide login and register buttons and show his/her name by 
  //calling getUserFulltName method in AuthService
  //HW
  //use ngIf in the HTML

  constructor() { }

  ngOnInit(): void {
  }

}
