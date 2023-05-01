import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserModel } from '../shared/services/user';
import { GoogleAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  accessToken!: string;
  isLoggedIn = false;
  userData!: any;
  userRef!: AngularFirestoreDocument<UserModel>;
  usersRef!: AngularFirestoreCollection<UserModel>;
  private dbUsersPath = '/users';
  constructor(public afAuth: AngularFireAuth, private _userService: UserService, private db: AngularFirestore)
  {
    this.usersRef = db.collection(this.dbUsersPath);

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
        localStorage.setItem('accessToken',this.accessToken);
        localStorage.setItem('user',JSON.stringify(res.user));
      }
    )
  }

  signup(email:string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email,password).then(
        res=>{
          this.isLoggedIn = true;
          this._userService._isLoggedIn$.next(true);
          this.accessToken = JSON.parse(JSON.stringify(res)).user.stsTokenManager.accessToken;
          localStorage.setItem('accessToken',this.accessToken);
          localStorage.setItem('user',JSON.stringify(res.user));
          console.log(JSON.stringify(res));
          resolve(res);
        }
      ).catch(error=>{
        reject(error);
      })
    })
  }
  logout(){
    this.afAuth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    this._userService._isLoggedIn$.next(false);
    this.isLoggedIn = false;
  }

  // User in Firestore
  getAll(): AngularFirestoreCollection<UserModel> {
    return this.usersRef;
  }
  // v Returns Promise, use .then({ .. })
  createUserFirestore(user: UserModel): any {
    return this.usersRef.add({ ...user });
  }
  addUserFirestore(user: UserModel){
    this.db.collection('users').add({
      ...user
  })
  .then(res => {
      console.log(res);
  })
  .catch(e => {
      console.log(e);
  })
  }
  updateUserFirestore(id: string, data: any): Promise<void> {
    return this.usersRef.doc(id).update(data);
  }
  deleteUserFirestore(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }

  // Googlt Auth
  // Sign in with Google
  GoogleAuth() {
    return this.onGoogleLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  onGoogleLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
function callback() {
  throw new Error('Function not implemented.');
}

