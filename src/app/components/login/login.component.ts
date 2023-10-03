import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { AppComponent } from 'src/app/app.component';
import { QuesAnsService } from 'src/app/ques-ans.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  username: string = '';
  constructor(private router: Router, private appComponent:AppComponent, private quesAnsService:QuesAnsService){}

  login() {
    console.log('Logged in as:', this.username);
    this.quesAnsService.login(this.username).subscribe(
      response => {
        this.appComponent.isLoggedIn = true
        this.router.navigate(['home'])
      },
      error => {
        console.error('Error posting question:', error);
      }
    )

  }
}
