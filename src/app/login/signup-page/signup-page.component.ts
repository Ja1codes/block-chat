import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  @Output() loginSelected = new EventEmitter<any>();
  @Output() loggedIn = new EventEmitter<any>();
  constructor(private _firebaseService: FirebaseService){
  }
  onSignUp(email:string, password:string){
    this._firebaseService.signup(email,password);
  }
  onLoginSelected(){
    this.loginSelected.emit();
  }
}
