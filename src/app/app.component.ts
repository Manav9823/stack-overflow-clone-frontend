import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stack-overflow-clone-frontend';
  isLoggedIn: boolean = false
  login(){
    this.isLoggedIn = true
  }
}
