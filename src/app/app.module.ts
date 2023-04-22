import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { MessageComponent } from './shared/message/message.component';
import { ChatInputComponent } from './components/chatbox/chat-input/chat-input.component';
import { ChatBreaklineComponent } from './shared/chat-breakline/chat-breakline.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    MessageComponent,
    ChatInputComponent,
    ChatBreaklineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
