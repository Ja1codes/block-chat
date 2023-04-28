import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  constructor(public firebaseAuth: AngularFireAuth, private _userService: UserService) { }

  signin(email:string, password: string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then(
      res=>{
        this.isLoggedIn = true;
        this._userService._isLoggedIn$.next(true);
        localStorage.setItem('user',JSON.stringify(res.user));
      }
    )
  }
  signup(email:string, password: string){
    this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(
      res=>{
        this.isLoggedIn = true;
        this._userService._isLoggedIn$.next(true);
        console.log(JSON.stringify(res));
        localStorage.setItem('user',JSON.stringify(res.user));
      }
    )
  }
  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this._userService._isLoggedIn$.next(false);
    this.isLoggedIn = false;
  }
}
