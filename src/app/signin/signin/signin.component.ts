import { Component } from '@angular/core';
import { AuthcontextService } from 'src/app/shared/authcontext.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(private authService:AuthcontextService){}

  username:string="";
  password:string="";

  onSignIn():void{
    // console.log(this.username,this.password);
    this.authService.setUser(this.username);
  }



}
