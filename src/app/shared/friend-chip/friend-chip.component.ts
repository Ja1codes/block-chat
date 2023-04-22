import { Component,Input } from '@angular/core';
import { User } from '../message/message';
@Component({
  selector: 'app-friend-chip',
  templateUrl: './friend-chip.component.html',
  styleUrls: ['./friend-chip.component.css']
})
export class FriendChipComponent {
  @Input() online: boolean = false;
  @Input() friend!: User;
}
