import { FirebaseService } from './../../core/firebase.service';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/message/message';
import { FriendService } from 'src/app/shared/friend.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  friends: User[] = [];
  constructor(private _friendservice:FriendService, private http: HttpClient, private _firebaseService: FirebaseService){
  }
  ngOnInit(){
    this.getChats();
    console.log("ACCESS TOKEN FROM LOCAL STORAGE")
    console.log(localStorage.getItem('accessToken'));
  }
  showFriendDetails(id: number){
    this._friendservice.showFriendDetails(id);
  }
  getChats(){
    const header = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "x-api-version": "1", 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` }) };
    this.http.get<any>(`http://localhost:3000/chats`, header).subscribe( response =>{
      this.friends = response.chats;
    });
  }
}
