import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  accessToken!: string;
  isLoggedIn = false;
  userData: any;
  constructor(public afAuth: AngularFireAuth, private _userService: UserService)
  {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  signin(email:string, password: string){
    this.afAuth.signInWithEmailAndPassword(email,password).then(
      res=>{
        this.isLoggedIn = true;
        this._userService._isLoggedIn$.next(true);
        this.accessToken = JSON.parse(JSON.stringify(res)).user.stsTokenManager.accessToken;
        console.log(this.accessToken);
        localStorage.setItem('accessToken',this.accessToken);
        localStorage.setItem('user',JSON.stringify(res.user));
      }
    )
  }

  signup(email:string, password: string){
    this.afAuth.createUserWithEmailAndPassword(email,password).then(
      res=>{
        this.isLoggedIn = true;
        this._userService._isLoggedIn$.next(true);
        console.log(JSON.stringify(res));
        localStorage.setItem('user',JSON.stringify(res.user));
      }
    )
  }
  logout(){
    this.afAuth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    this._userService._isLoggedIn$.next(false);
    this.isLoggedIn = false;
  }
}
