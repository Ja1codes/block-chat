import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
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
import {SHA256} from 'crypto-js';
import { AngularFireModule} from '@angular/fire/compat'
import { FirebaseService } from './core/firebase.service';
import { HomeComponent } from './home/home.component';

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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1KyjtYU1ukaLFoQaZIxxnR0uuvMMTBv8",
      authDomain: "blockchat-db.firebaseapp.com",
      databaseURL: "https://blockchat-db-default-rtdb.firebaseio.com",
      projectId: "blockchat-db",
      storageBucket: "blockchat-db.appspot.com",
      messagingSenderId: "408946840423",
      appId: "1:408946840423:web:9b23d07b03a6c8d25a15c2",
      measurementId: "G-BWX1GLL9HP"
    }),
    LoginModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
