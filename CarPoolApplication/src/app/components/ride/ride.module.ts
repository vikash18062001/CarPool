import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RideRoutingModule } from './ride-routing.module';
import { UsercardComponent } from '../../common/component/usercard/usercard.component';
// import { BookrideComponent } from './bookoroffer/bookride.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyridesComponent } from './myrides/myrides.component';
import { NavbarComponent } from 'src/app/common/component/navbar/navbar.component';
import { CommonComponentModule } from 'src/app/common/common-component.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookrideComponent } from './bookoroffer/bookride.component';


@NgModule({
  declarations: [
    BookrideComponent,
    HomePageComponent,
    MyridesComponent,
    
  ],
  imports: [
    CommonModule,
    RideRoutingModule,
    CommonComponentModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RideModule { }
