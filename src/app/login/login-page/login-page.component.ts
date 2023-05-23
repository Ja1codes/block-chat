import { UserService } from 'src/app/user.service';
import { FirebaseService } from './../../core/firebase.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css',]
})
export class LoginPageComponent {
  @Output() loggedIn = new EventEmitter<any>();
  @Output() signupSelected = new EventEmitter<any>();
  email!: string;
  password!: string;
  constructor(private _firebaseService: FirebaseService, private _userService: UserService){
  }
  onSignIn(email: string, password: string){
    this._firebaseService.signin(email,password).then(res=>{
      this._userService.currentUser.id = JSON.parse(JSON.stringify(res)).user.uid;
          if(res){
            var user: any;
            this._firebaseService.getUserById(JSON.parse(JSON.stringify(res)).user.uid).then(usr=>{
              user = usr;
              this._userService.currentUser.userName = user.name;
              this._userService.currentUser.avatar = user.photo;
              this._userService.currentUser.email = user.email;
            })
          }
    })

    this.loggedIn.emit();
  }
  onSigupSelected(){
    this.signupSelected.emit();
  }
  onGoogleLoginClick(){
    this._firebaseService.GoogleAuth()
  }
}
