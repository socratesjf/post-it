import {Router, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {UsersComponent} from './components/users/users.component';

export const routing =RouterModule.forRoot([
    {path: '' , component: HomeComponent},
    {path: 'posts' , component: PostsComponent},
    {path: 'users' , component: UsersComponent},
    {path: '**' , component: HomeComponent}
    

])
