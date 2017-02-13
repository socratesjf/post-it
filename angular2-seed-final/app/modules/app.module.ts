import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../components/app/app.component';
import {NavBar} from '../components/navbar/navbar.component'
import {HomeComponent} from '../components/home/home.component'
import {PostsComponent} from '../components/posts/posts.component'
import {UsersComponent} from '../components/users/users.component'

import {routing} from '../app.routing'


@NgModule({
  imports:      [ 
    BrowserModule,
    routing
     ],
  declarations: [ 
    AppComponent,
    NavBar,
    HomeComponent,
    PostsComponent,
    UsersComponent
    ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
