import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FriendService } from 'src/app/shared/friend.service';
import { Message, User } from 'src/app/shared/message/message';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  messages: Message[] = [{
    user:{
      id: 1,
      userName: 'Jai',
      avatar: '',
    },
    message: "@pierrhack I did for 6 days in Iceland",
    attachment: [],
    sentTime: new Date("Tue Feb 05 2019 12:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 2,
      userName: 'Anisha',
      avatar: '',
    },
    message: "Which country to visit next? This is a photo with my friends - celebrating in Bali my-top-places.jpg",
    attachment: [{type: 'photo',name: 'Bali',source: 'https://i.ibb.co/s9bGzy8/image.png'}],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 1,
      userName: 'Jai',
      avatar: '',
    },
    message: "@har_adams wow it’s amazing, I want to buy a van and travelling next year",
    attachment: [],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 2,
      userName: 'Anisha',
      avatar: '',
    },
    message: "Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country). ",
    attachment: [],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 2,
      userName: 'Anisha',
      avatar: '',
    },
    message: "Which country to visit next? This is a photo with my friends - celebrating in Bali my-top-places.jpg",
    attachment: [{type: 'photo',name: 'Bali',source: 'https://i.ibb.co/s9bGzy8/image.png'}],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 1,
      userName: 'Jai',
      avatar: '',
    },
    message: "@aa_da What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want. ",
    attachment: [],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 1,
      userName: 'Jai',
      avatar: '',
    },
    message: "@aa_da What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want. ",
    attachment: [],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 2,
      userName: 'Anisha',
      avatar: '',
    },
    message: "Which country to visit next? This is a photo with my friends - celebrating in Bali my-top-places.jpg",
    attachment: [{type: 'photo',name: 'Bali',source: 'https://i.ibb.co/s9bGzy8/image.png'}],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 1,
      userName: 'Jai',
      avatar: '',
    },
    message: "@aa_da What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want. ",
    attachment: [],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  {
    user:{
      id: 2,
      userName: 'Anisha',
      avatar: '',
    },
    message: "Which country to visit next? This is a photo with my friends - celebrating in Bali my-top-places.jpg",
    attachment: [{type: 'photo',name: 'Bali',source: 'https://i.ibb.co/s9bGzy8/image.png'}],
    sentTime: new Date("Tue Feb 05 2019 06:05:22 GMT+0530 (IST)"),
  },
  ];
  @ViewChild('chatBox') chatBox!: ElementRef; // For Scroll to Bottom Feature
  constructor(private _friendService: FriendService){
  }
  chatWith!: User;
  ngOnInit(): void {
    this._friendService.$chatWith.subscribe( user =>{
      this.chatWith = user;
    })
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }
  newMessage(message: Message) {
    const newMessage = {...message}
    this.messages.push(newMessage);
    this.scrollToBottom();
  }
  private scrollToBottom() {
    try {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
