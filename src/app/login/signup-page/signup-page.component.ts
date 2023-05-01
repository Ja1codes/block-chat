import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  constructor(private _firebaseService: FirebaseService){
  }
  onSignUp(email:string, password:string){
    this._firebaseService.signup(email,password);
  }
}
