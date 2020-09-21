import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  buildForm(){
    this.registerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      confirmPassword: ''
    });
  }

  onSubmit(){
    console.log('submit clicked');
    this.submitted = true;
  }
  ngOnInit(): void {
    this.buildForm();
  }

}
