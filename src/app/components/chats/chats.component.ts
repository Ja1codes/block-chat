import { Component } from '@angular/core';
import { User } from 'src/app/shared/message/message';
import { FriendService } from 'src/app/shared/friend.service';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  friends: User[] = [{
    id: 1,
    userName: 'Jai Singh',
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=JaiSingh`,
  },
  {
    id: 2,
    userName: 'Anisha Singh',
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=AnishaSingh`,
  },
  {
    id: 3,
    userName: 'Rahul Bhat',
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=RahulBhat`,
  },
  {
    id: 4,
    userName: 'Arya Karemore',
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=AryaKaremore`,
  },
  {
    id: 5,
    userName: 'Artistson Syngwan',
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=ArtistsonSyngwan`,
  },
  {
    id: 6,
    userName: 'Dhiraj',
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=Dhiraj`,
  },
  ];
  constructor(private _friendservice:FriendService){}
  showFriendDetails(id: number){
    this._friendservice.showFriendDetails(id);
  }
}
