import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent,
  ],

})
export class LoginModule { }
