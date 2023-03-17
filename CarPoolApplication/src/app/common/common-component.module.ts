import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentRoutingModule } from './common-component-routing.module';
import { AlertstatusComponent } from './component/alertstatus/alertstatus.component';
import { UsercardComponent } from './component/usercard/usercard.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AlertstatusComponent,
    UsercardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CommonComponentRoutingModule
  ],
  exports:[
    AlertstatusComponent,
    UsercardComponent,
    NavbarComponent
  ]
})
export class CommonComponentModule { }
