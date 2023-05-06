import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FriendService } from 'src/app/shared/friend.service';
import { Message, User } from 'src/app/shared/message/message';
import { Block, BlockChain } from 'src/app/blockchain/blockchain'
import { FirebaseService } from 'src/app/core/firebase.service';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  messages: Message[] = [];
  @ViewChild('chatBox') chatBox!: ElementRef; // For Scroll to Bottom Feature
  constructor(private _friendService: FriendService, private _firebaseService: FirebaseService){
  }
  chatWith: User = {
    id: " ",
    userName: "Select User to Chat with!",
    avatar: "",
    email: ""
  };
  //contextChain!: BlockChain;
  ngOnInit(): void {
    this._friendService.$chatWith.subscribe( user =>{
      if(user.id == '-1'){
        // Message "Select a chat to continue"
      }
      else{
        this.chatWith = user;
      }
    })
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }
  validateChat(){
    //this.contextChain.isChainValid();
    alert('Chat is Valid!');
  }
  newMessage(message: Message) {
    const newMessage = {...message};
    //const block: Block = new Block(this.contextChain.chainId, this.contextChain.getLatestBlock().index+1, new Date, message, this.contextChain.getLatestBlock().hash);
    //block.hash = block.calculateHash();
    //console.log(JSON.stringify(block));
    //this.contextChain.addBlock(block);
    this.messages.push(newMessage);
    this._firebaseService.createMessageFirestore(newMessage);
    this.scrollToBottom();
  }
  private scrollToBottom() {
    try {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
