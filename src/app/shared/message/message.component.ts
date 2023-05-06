import { Component, Input, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input () sent: boolean = false;
  @Input () message!: Message;
  ngOnInit(): void {
  }
}
