import { Component } from '@angular/core';
import { User } from './shared/message/message';
import { UserService } from './user.service';
import { FirebaseService } from './core/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockChat';
  currentUser!: User;
  constructor(
    private _userService: UserService,
    private _firebaseServie: FirebaseService
    ){
  }
  isSignedIn=false;
  ngOnInit(){
    this._userService.isLoggedIn.subscribe(res=>{
      this.isSignedIn = res;
    })
    if(localStorage.getItem('user')!==(null || 'null')){
      this.isSignedIn = true;
      this._userService.currentUser.id = JSON.parse(localStorage.getItem('user') ?? " ").uid;
    }

  }
  onLogin(){
    this.isSignedIn = true;
  }
}
