import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/common/validators';
import { SignUpRequest } from 'src/app/models/signuprequest';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  passwordType:string ="password";
  signUpForm : FormGroup ;
  password : string = '';
  confirmPassword:string ='';
  signUpRequest : SignUpRequest = new SignUpRequest({});
  allUsers : Array<Object> =[];
  isSuccess : boolean = false;
  toShow : boolean = false;
  responseMsg !: string ;

  constructor(private accountService : AccountService,private router:Router)
  {
    this.signUpForm  = new FormGroup({
      emailId:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
    this.signUpForm.addValidators(CustomValidators.confirmPasswordValidator(this.signUpForm));
  }

  showPassword()
  {
    this.passwordType = this.passwordType =="password"?"text":"password";
  }

  onSubmit()
  {
    
    if(this.signUpForm.valid)
    {
    this.signUpRequest.emailId = this.getControl('emailId').value;
    this.signUpRequest.password = this.getControl('password').value;
    this.signUpRequest.confirmPassword = this.getControl('confirmPassword').value;
    this.accountService.signUpUser(this.signUpRequest).subscribe(signup =>
      {
        if(signup.isSuccess)
          this.onSuccessfulSignUp(signup.message);
        else 
          this.onUnsuccessfulSignUp(signup.message);     
    });
    }
    else {
     this.onUnsuccessfulSignUp("Fill the required fields");
    }
    
  }

  getControl(controlName : string) : AbstractControl
  {
    return this.signUpForm.controls[controlName];
  }

  onSuccessfulSignUp(msg : string)
  {
    this.responseMsg = msg;
    this.isSuccess = true;
    this.toShow = true;
    setTimeout(()=>{
      this.toShow = false;
      this.router.navigate(["login"]);
    },1200)
  }

  onUnsuccessfulSignUp(msg:string)
  {
    this.responseMsg = msg == ""?"Unsuccesful check data" : msg ;
    this.isSuccess = false;
    this.toShow = true;
    setTimeout(()=>{
      this.toShow = false;
    },2000)
  }

}
