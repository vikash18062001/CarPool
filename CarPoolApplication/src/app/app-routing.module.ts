import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookrideComponent } from './components/ride/bookoroffer/bookride.component';
import { HomePageComponent } from './components/ride/home-page/home-page.component';
import { LoginComponent } from './components/security/login/login.component';
import { MyridesComponent } from './components/ride/myrides/myrides.component';
// import { OfferrideComponent } from './components/offerride/offerride.component';
import { SignupComponent } from './components/security/signup/signup.component';

const routes: Routes = [
  {path:"",component:LoginComponent,},
  {path:"home",component:HomePageComponent},
  {path:"signup",component:SignupComponent},
  {path:"ride/:rideMode",component:BookrideComponent},
  // {path:"offerride",component:OfferrideComponent},
  {path:"myrides",component:MyridesComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
