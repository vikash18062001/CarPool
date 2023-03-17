import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/loginrequest';
import { AccountService } from 'src/app/services/account.service';
import { Utility } from 'src/app/utility/utility';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwordType : string = "password";
  loginRequest : LoginRequest = new LoginRequest({});
  loginForm : FormGroup  = new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  })
  isSuccess : boolean = false;
  toShow : boolean = false;
  responseMsg !: string ;

  constructor(private accountService : AccountService, private router:Router){}

  async onSubmit(){
    if(this.loginForm.valid)
    {
      this.loginRequest.emailId = this.loginForm.get('emailId')?.value;
      this.loginRequest.password = this.loginForm.get('password')?.value;
      await this.accountService.login(this.loginRequest).subscribe(async login=> {
        if(login.isSuccess)
        {
          await this.accountService.getUser(this.loginRequest).subscribe(user =>{
            Utility.currentLoggedInUser(user);
            this.onSuccessfulLogin(login.message);
          });
        }
        else 
          this.onUnsuccessfulLogin(login.message);     
        
      })
    console.log(this.loginForm.value);
    }
    else {
     this.onUnsuccessfulLogin("");
    }
    
  }

  showPassword()
  {
    this.passwordType = this.passwordType ==  "password" ? "text" : "password";
  }

  getControl(controlName : string) : AbstractControl
  {
    return this.loginForm.controls[controlName];
  }

  onSuccessfulLogin(msg : string)
  {
    this.responseMsg = msg;
    this.isSuccess = true;
    this.toShow = true;
    setTimeout(()=>{
      this.toShow = false;
      this.router.navigate(["home"]);
    },1200)
  }

  onUnsuccessfulLogin(msg:string)
  {
    this.responseMsg = msg == ""?"Unsuccesful check data" : msg ;
    this.isSuccess = false;
    this.toShow = true;
    setTimeout(()=>{
      this.toShow = false;
    },2000)
  }

}
