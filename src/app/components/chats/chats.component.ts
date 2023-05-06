import { FirebaseService } from './../../core/firebase.service';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/message/message';
import { FriendService } from 'src/app/shared/friend.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  friends: User[] = [];
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
  setChatboxContext(id: string){
    this._friendservice.setChatboxContext(id);
  }
  getChats(){
    console.log("Get Call "+ this._userService.currentUser.id)
    var friendChains;

    var items = this._firebaseService.getFriendChains(this._userService.currentUser.id).subscribe((res)=>{
      friendChains = res.filter((item)=>item.users.includes(this._userService.currentUser.id));
      friendChains.forEach((item)=>{
        var newFriend = new User;
        var friendId = item.users.filter((Id)=>Id!==this._userService.currentUser.id);
        this._firebaseService.getUserById(friendId[0]).then(usr=>{
          newFriend.id = friendId[0];
          newFriend.email = usr.email;
          newFriend.userName = usr.name;
          newFriend.avatar = usr.photo;
        })
        this.friends.push(newFriend);
      })
    })
    this._friendservice.users = this.friends;
  }
}
