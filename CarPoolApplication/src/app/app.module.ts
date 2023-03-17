import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'
import { NumberToArrayPipe } from './constants/pipes';
import { SecurityModule } from './components/security/security.module';
import { RideModule } from './components/ride/ride.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SecurityModule,
    RideModule

  ],
  providers: [NumberToArrayPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
