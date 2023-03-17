// import { Component } from '@angular/core';
// import { AbstractControl, FormArray, Validators } from '@angular/forms';
// import { FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// import { OfferRide } from 'src/app/models/offerride';
// import { OfferrideService } from 'src/app/services/offerride.service';
// import { Utility } from 'src/app/utility/utility';

// @Component({
//   selector: 'app-offerride',
//   templateUrl: './offerride.component.html',
//   styleUrls: ['./offerride.component.scss']
// })
// export class OfferrideComponent {
//   timeSlots: Array<string> = [
//     "5am - 9am","9am - 12pm","12pm - 3pm","3pm - 6pm","6pm - 9pm"
//   ]; // move in to constants
//   stopsForm : FormGroup ;
//   isNextCard : boolean = false;
//   selectedTime : string = '';
//   offerRideForm : FormGroup = new FormGroup({});
//   isSelectedSeat : boolean = true;
//   offerRide : OfferRide = new OfferRide({});
//   seatsAvailable : number = 0;

//   constructor(private fb:FormBuilder,private offer : OfferrideService)
//   {
//     this.stopsForm = this.fb.group({stops:this.fb.array([this.fb.control('')])});
//     this.offerRideForm = new FormGroup({
//       From : new FormControl('',[Validators.required]),
//       To : new FormControl('',[Validators.required]),
//       Date : new FormControl('',[Validators.required])
//     })
//   }

//   onSubmit(){
//     if(this.selectedTime && this.offerRideForm.valid) {
//     this.offerRide.date = this.getControl('Date').value;
//     this.offerRide.time = this.selectedTime;
//     this.offerRide.stops=this.stopsForm.controls['stops'].value;
//     this.offerRide.stops.unshift(this.getControl('From').value);
//     this.offerRide.stops.push(this.getControl('To').value);
//     this.offerRide.availableSeats = this.seatsAvailable;
//     this.offerRide.userId = Utility.loggedInUser.id;
//     this.offer.offerRide(this.offerRide).subscribe(item=>{
//       console.log(item);
      
//     });

//     console.log(this.offerRideForm);
    
//     } else if(this.selectedTime === "" || this.seatsAvailable == 0) {
//       if(this.seatsAvailable == 0)
//         this.isSelectedSeat = false;
//     }

//   }

//   getControl(controlName  : string ) : AbstractControl
//   {
//     return this.offerRideForm.controls[controlName];
//   }

//   stops():FormArray {
//     return this.stopsForm.get('stops') as FormArray;
//   }
//   addStop()
//   {
//     this.stops().push(new FormControl());
//   }

//   nextCard() {
//     this.isNextCard = true;
//   }

//   selectedTimeSlot(time:string)
//   {
//     this.selectedTime = this.selectedTime == time ? "" : time;
//   }

//   availableSeat(seat : number)
//   {
//     this.isSelectedSeat = true;
//     this.seatsAvailable = this.seatsAvailable == seat ? 0 : seat;
//   }
// }
