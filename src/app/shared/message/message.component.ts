import { Component, Input, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input () sent: boolean = false;
  @Input () message: Message = {
    user:{
      id: 1,
      userName: 'Jai',
      avatar: '',
    },
    message: "@pierrhack I did for 6 days in Iceland",
    attachment: [],
    sentTime: new Date("Tue Feb 05 2019 12:05:22 GMT+0530 (IST)"),
    };
  ngOnInit(): void {
    console.log('Initialized Message Component');
    console.log(this.message);
  }
}
