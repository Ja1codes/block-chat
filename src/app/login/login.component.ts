import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignUp: boolean = false;
  @Output() loggedIn = new EventEmitter<any>();


  isloggedIn(){
    this.loggedIn.emit();
  }
  onSignupSelected(){
    this.isSignUp = true;
  }
  onLoginSelected(){
    this.isSignUp = false;
  }
}
