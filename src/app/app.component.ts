import { Component } from '@angular/core';
import { User } from './shared/message/message';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockChat';
  currentUser!: User;
  constructor(private _userService: UserService){

  }
  ngOnInit(){
    this.currentUser = this._userService.currentUser;
  }
}
