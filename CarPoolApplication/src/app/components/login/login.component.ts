import { Component } from '@angular/core';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLogin: boolean  = true;
  baseText: string = "";
  baseLink: string = "";

  ngOnInit()
  {
    this.baseText = "Already a member?";
    this.baseLink = "LOG IN";
  }

  onModeChange()
  {
    if(this.isLogin)  {
      this.baseText = "Not a member yet?";
      this.baseLink = "SIGN UP";
    } else {
      this.baseText = "Already a member?"
      this.baseLink = "LOG IN";
    }
    this.isLogin = !this.isLogin;
  }

}
