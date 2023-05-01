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
    id: 0,
    userName: "",
    avatar: ``,
  }
}
