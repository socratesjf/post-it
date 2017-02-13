import { Component } from '@angular/core';
import {NavBar} from '../navbar/navbar.component'

@Component({
  selector: 'my-app',
  template: `
  <navbar></navbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent { }
