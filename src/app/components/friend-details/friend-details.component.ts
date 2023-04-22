import { Component } from '@angular/core';
import { FriendService } from 'src/app/shared/friend.service';
@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent {
  constructor(private friendService: FriendService){}
  friend!: any;
  ngOnInit(){
    this.friendService.$chatWith.subscribe(friend =>{
      this.friend = friend;
    })
  }
}
