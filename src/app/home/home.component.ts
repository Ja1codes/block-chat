import { Component } from '@angular/core';
import { User } from '../shared/message/message';
import { UserService } from '../user.service';
import { FirebaseService } from '../core/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'blockChat';
  currentUser!: User;
  constructor(
    private _userService: UserService,
    private _firebaseService: FirebaseService
    ){}
  ngOnInit(){
    this.currentUser = this._userService.currentUser;
  }
  onSignOut(){
    this._firebaseService.logout();
  }
}
