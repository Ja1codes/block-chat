import { Injectable } from '@angular/core';
import { User } from './message/message';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FriendService {
  users: User[] = [{ id: '-1', userName: ' ', avatar: '', email: ' ' }];
  $chatWith: BehaviorSubject<User> = new BehaviorSubject<User>(this.users[0]);
  $contextChainId: BehaviorSubject<string> = new BehaviorSubject("-1")
  constructor() {}
  setChatboxContext(id: string, chainId: string) {
    this.$chatWith.next(
      this.users.find((obj: any) => obj.id === id) ?? this.users[1]
    );
    this.$contextChainId.next(chainId);
  }
}
