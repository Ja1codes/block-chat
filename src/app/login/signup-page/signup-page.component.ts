import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';
import { UserModel } from 'src/app/shared/services/user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  @Output() loginSelected = new EventEmitter<any>();
  @Output() loggedIn = new EventEmitter<any>();
  newUser: UserModel = new UserModel;
  constructor(private _firebaseService: FirebaseService){
  }
  async onSignUp(email:string, password:string, name: string, photo:string = ""){
    this.newUser.email = email;
    this.newUser.name = name;
    this.newUser.photo = photo;
    console.log(JSON.stringify(this.newUser));
      await this._firebaseService.signup(email, password).then(res => {
        const uid = JSON.parse(JSON.stringify(res)).user.uid;
        console.log(uid);
        this._firebaseService.createUserFirestore(this.newUser);
      })
      .catch(error => {
        console.error(error);
      });
  }
  onLoginSelected(){
    this.loginSelected.emit();
  }

}
