import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn$.asObservable();
  currentUser: any = {
    id: 10,
    userName: "Pankaj Choudhary",
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=PankajChoudhary`,
  }
}
