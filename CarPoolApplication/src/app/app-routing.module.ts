import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookrideComponent } from './components/bookride/bookride.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { MyridesComponent } from './components/myrides/myrides.component';
import { OfferrideComponent } from './components/offerride/offerride.component';
import { RidecardComponent } from './components/ridecard/ridecard.component';
import { UsercardComponent } from './components/usercard/usercard.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomePageComponent},
  // {path:"book",component:UsercardComponent},
  {path:"bookride",component:BookrideComponent},
  {path:"offerride",component:OfferrideComponent},
  {path:"myrides",component:MyridesComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
