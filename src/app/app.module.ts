import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { MessageComponent } from './shared/message/message.component';
import { ChatInputComponent } from './components/chatbox/chat-input/chat-input.component';
import { ChatBreaklineComponent } from './shared/chat-breakline/chat-breakline.component';
import { ChatsComponent } from './components/chats/chats.component';
import { FriendChipComponent } from './shared/friend-chip/friend-chip.component';
import { FriendDetailsComponent } from './components/friend-details/friend-details.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    MessageComponent,
    ChatInputComponent,
    ChatBreaklineComponent,
    ChatsComponent,
    FriendChipComponent,
    FriendDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
