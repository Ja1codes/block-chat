import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserModel } from '../shared/services/user';
import { ChainRegistry } from '../shared/services/chain-registry';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  accessToken!: string;
  isLoggedIn = false;
  userData!: any;
  userRef!: AngularFirestoreDocument<UserModel>;
  usersRef!: AngularFirestoreCollection<UserModel>;
  chainRegistryRef!: AngularFirestoreCollection<ChainRegistry>
  chainRef!: AngularFirestoreDocument<ChainRegistry>
  private dbUsersPath = '/users';
  private dbChainsPath = '/chain-registry';
  constructor(public afAuth: AngularFireAuth, private _userService: UserService, private db: AngularFirestore)
  {
    this.usersRef = db.collection(this.dbUsersPath);
    this.chainRegistryRef = db.collection(this.dbChainsPath);
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
          this._userService.currentUser.id = JSON.stringify(res.user?.uid);
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
  createUserFirestore(user: UserModel, uid: string): any {
    return this.usersRef.doc(uid).set({ ...user });
  }
  addUserFirestore(user: UserModel, uid: string){
    this.db.collection('users').doc(uid).set({
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
  getUserByEmail(email: string){
    var itemCollection = this.db.collection<UserModel>('users', ref => {
      // Compose a query using multiple .where() methods
      return ref.where('email', '==', email)
    });
    var items = itemCollection.valueChanges({idField: 'id'});
    return items;
  }

  //Chain Registry
  createChainFirestore(users: string[]){
    const newChain: ChainRegistry = new ChainRegistry;
    newChain.users = users;
    this.chainRegistryRef.add({...newChain}).then(ref=>{
      return ref.id;
    })
  }
}
