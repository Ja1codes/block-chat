import { FirebaseService } from './../../core/firebase.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css',]
})
export class LoginPageComponent {
  @Output() loggedIn = new EventEmitter<any>();
  @Output() signupSelected = new EventEmitter<any>();
  constructor(private _firebaseService: FirebaseService ){
  }
  onSignIn(email: string, password: string){
    this._firebaseService.signin(email,password);
    this.loggedIn.emit();
  }
  onSigupSelected(){
    this.signupSelected.emit();
  }
}
