import { Component } from '@angular/core';
import { User } from '../shared/message/message';
import { UserService } from '../user.service';
import { FirebaseService } from '../core/firebase.service';
import { UserModel } from '../shared/services/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'blockChat';
  currentUser!: User;
  //Add Friend
  friendFound: boolean = false;
  friend!: UserModel;
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
  searchFriend(email:string){
    this._firebaseService.getUserByEmail(email).subscribe( res =>{
      console.log(res);
      this.friendFound = true;
      this.friend = res[0];
    })
  }
  addFriend(id:string){
    var users: string[] = [];
    users.push(id);
    users.push(this._userService.currentUser.id);
    this._firebaseService.createChainFirestore(users);
  }
}
