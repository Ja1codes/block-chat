import { Component } from '@angular/core';
import { User } from '../shared/message/message';
import { UserService } from '../user.service';
import { FirebaseService } from '../core/firebase.service';
import { UserModel } from '../shared/services/user';
import { BlockChain } from '../blockchain/blockchain';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'blockChat';
  currentUser!: any;
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
      console.log("Friend Found "+res);
      this.friendFound = true;
      this.friend = res[0];
    })
  }
  async addFriend(id:string){
    var users: string[] = [];
    users.push(id);
    users.push(this._userService.currentUser.id);
    const chainId = await this._firebaseService.createChainFirestore(users);
    console.log("Added Friend: " + chainId);
    var newChain = new BlockChain(chainId);
    this._firebaseService.createMessageFirestore(newChain.chain[0]);
  }
}
