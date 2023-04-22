import { Injectable } from '@angular/core';
import { User } from './message/message';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FriendService {
  users: User[] = [{
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
  ];
  $chatWith: BehaviorSubject<User> = new BehaviorSubject(this.users[1]);
  constructor() { }
  showFriendDetails(id: number){
    this.$chatWith.next(this.users.find((obj: any) => obj.id === id) ?? this.users[1]);
  }
}
