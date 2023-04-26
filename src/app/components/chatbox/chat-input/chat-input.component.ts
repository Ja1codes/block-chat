import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Message } from 'src/app/shared/message/message';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  @Output() newMessage =  new EventEmitter<Message>();
  messageText: FormControl = new FormControl();
  message: Message = new Message;
  constructor(private _userService: UserService){}

  onSend(){
    this.message.user = this._userService.currentUser;
    this.message.message = this.messageText.value;
    this.message.sentTime = new Date();
    this.newMessage.emit(this.message);
    this.messageText.setValue("");
  }
}
