import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-chat-breakline',
  templateUrl: './chat-breakline.component.html',
  styleUrls: ['./chat-breakline.component.css']
})
export class ChatBreaklineComponent {
@Input() dateTime: string = 'Today';
}
