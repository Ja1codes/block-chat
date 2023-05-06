import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';
import { UserModel } from 'src/app/shared/services/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  @Output() loginSelected = new EventEmitter<any>();
  @Output() loggedIn = new EventEmitter<any>();
  newUser: UserModel = new UserModel;
  constructor(private _firebaseService: FirebaseService,private _userService: UserService){
  }
  onSignUp(email:string, password:string, name: string, photo:string = ""){
    this.newUser.email = email;
    this.newUser.name = name;
    this.newUser.photo = `https://api.dicebear.com/6.x/initials/svg?seed=${name.split(' ')[0]}`;
    console.log(JSON.stringify(this.newUser));
      this._firebaseService.signup(email, password).then(res => {
        const uid = JSON.parse(JSON.stringify(res)).user.uid;
        console.log(uid);
        debugger
        this._firebaseService.addUserFirestore(this.newUser, uid);
        this.loginSelected.emit();
      })
      .catch(error => {
        console.error(error);
      });
  }
  onLoginSelected(){
    this.loginSelected.emit();
  }

}
