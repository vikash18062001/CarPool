import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { BookrideComponent } from './components/bookride/bookride.component';
import { OfferrideComponent } from './components/offerride/offerride.component';
import { RidecardComponent } from './components/ridecard/ridecard.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MyridesComponent } from './components/myrides/myrides.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    UsercardComponent,
    BookrideComponent,
    OfferrideComponent,
    RidecardComponent,
    MyridesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
