import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes : Routes = [
    // {path:"",component:LoginComponent},
    // {path:"signup",component:SignupComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class SecurityRoutingModule
{
    
}