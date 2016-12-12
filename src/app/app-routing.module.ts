import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {ChatWindowComponent} from "./chat-window/chat-window.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'chat', component: ChatWindowComponent},
  {path: 'users', component: UsersComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
