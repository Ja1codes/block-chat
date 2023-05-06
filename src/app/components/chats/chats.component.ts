import { FirebaseService } from './../../core/firebase.service';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/message/message';
import { FriendService } from 'src/app/shared/friend.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/user.service';
import { Chat } from 'src/app/shared/models/chat';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  friends: Chat[] = [];
  constructor(private _friendservice:FriendService, private http: HttpClient, private _firebaseService: FirebaseService, private _userService: UserService){
  }
  ngOnInit(){
    this.getChats();
    console.log("ACCESS TOKEN FROM LOCAL STORAGE")
    console.log(localStorage.getItem('accessToken'));
  }
  // showFriendDetails(id: number){
  //   this._friendservice.showFriendDetails(id);
  // }
  setChatboxContext(id: string, chainId: string){
    this._friendservice.setChatboxContext(id, chainId);
  }
  getChats(){
    console.log("Get Call "+ this._userService.currentUser.id)
    var friendChains;

    var items = this._firebaseService.getFriendChains(this._userService.currentUser.id).subscribe((res)=>{
      friendChains = res.filter((item)=>item.users.includes(this._userService.currentUser.id));
      friendChains.forEach((item)=>{
        var newFriend = new Chat;
        newFriend.chainId = item.chainId;
        newFriend.user = new User;
        var friendId = item.users.filter((Id)=>Id!==this._userService.currentUser.id);
        this._firebaseService.getUserById(friendId[0]).then(usr=>{
          newFriend.user.id = friendId[0];
          newFriend.user.email = usr.email;
          newFriend.user.userName = usr.name;
          newFriend.user.avatar = usr.photo;
        })
        this.friends.push(newFriend);
      })
    })
    this.friends.forEach((item)=>{
      this._friendservice.users.push(item.user);
    })
    //this._friendservice.users = this.friends;
  }
}
