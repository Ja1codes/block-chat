import { FirebaseService } from './../../core/firebase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css',]
})
export class LoginPageComponent {
  constructor(private _firebaseService: FirebaseService ){
  }
  onSignUp(email:string, password:string){
    this._firebaseService.signup(email,password);
  }
}
