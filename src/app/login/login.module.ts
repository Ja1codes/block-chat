import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent,
    LoginComponent
  ],

})
export class LoginModule { }
