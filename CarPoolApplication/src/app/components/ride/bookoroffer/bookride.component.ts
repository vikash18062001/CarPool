import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { Ride } from 'src/app/models/ride';
import { BookrideService } from 'src/app/services/bookride.service';
import { OfferrideService } from 'src/app/services/offerride.service';
import { Utility } from 'src/app/utility/utility';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.scss']
})
export class BookrideComponent {

  timeSlots : Array<string> ;
  bookRideForm : FormGroup ;
  rideDetails : Ride = new Ride();
  selectedTime : string ="";
  matchedRide : Array<Ride> = []; 
  cardHeading !: string ;
  rideMode !: string | null;
  isNextCard : boolean = false;
  seatsAvailable : number = 0;
  stopsForm : FormGroup ;
  toShow!:boolean;
  responseMsg !: string;
  isSuccess !: boolean;

  constructor(private bookrideService : BookrideService,private route :ActivatedRoute,private fb:FormBuilder ,private router : Router,private offerRideService:OfferrideService)
  {
    this.timeSlots = Constants.timeSlots;
    this.bookRideForm = new FormGroup({
      From : new FormControl('',[Validators.required]),
      To : new FormControl('',[Validators.required]),
      Date : new FormControl('',[Validators.required]),
    })
    this.stopsForm = this.fb.group({stops:this.fb.array([this.fb.control('')])});
  }

  ngOnInit()
  {
    this.route.paramMap.subscribe((params)=>{
      console.log(params);
      this.rideMode = params.get('rideMode');
    });
    this.cardHeading = this.rideMode == "bookride" ? "Book a ride" : "Offer a ride";
  }

  getControl(controlName : string) : AbstractControl{
    return this.bookRideForm.controls[controlName];
  }

  onSubmitForBooking()
  {
    // request will always be true as we are enabling the save buttton after checking all the validations
    if(this.stopsForm.valid && this.bookRideForm.valid)
    {
      this.initializeRideDetail();
      this.bookrideService.getMatchesForRide(this.rideDetails).subscribe(obj=>{
        this.matchedRide = [];
        console.log(obj);
        obj.forEach(element => {
          this.matchedRide.push(element);
        });
      })
      console.log(this.rideDetails); // make a request to submit the data
    } else {
      this.onUnsuccessfulOperation("Fill the required fields");
    }
  }

  onSubmitForOffering()
  {
    if(this.stopsForm.valid && this.bookRideForm.valid)
    {
      this.initializeRideDetail();
      this.offerRideService.offerRide(this.rideDetails).subscribe((ride)=>{ // check for return type of this
        console.log(ride);
        this.onSuccessfulOperation("Ride offered successfully"); // on success
        // this.onUnsuccessfulOperation("Fill the required fields"); // on unsucessful operation . If an error occur from the backend

      });
    }
    else
    {
      this.onUnsuccessfulOperation("Fill the required fields");
    }
  }


  initializeRideDetail()
  {
      this.rideDetails.source = this.getControl('From').value;
      this.rideDetails.destination = this.getControl('To').value;
      this.rideDetails.time = this.selectedTime;
      this.rideDetails.date = this.getControl('Date').value;

      if(this.rideMode!="bookride")
      {
        this.rideDetails.availableSeats  = this.seatsAvailable;
        this.rideDetails.stops = this.stopsForm.controls['stops'].value ?? [];
        this.rideDetails.rideOfferedBy = Utility.loggedInUser.id;
        this.rideDetails.price = 0; // have to add input field for price
      }
      
  }

  selectedTimeSlot(time:string)
  {
    this.selectedTime = this.selectedTime == time ? "" : time;
  }

  numberToArray(length : number)
  {
    return Constants.generateArray(length);
  }

  async bookRide(rideDetail:Ride)
  {
    await this.bookrideService.bookRide(Utility.loggedInUser.id , rideDetail.rideId).subscribe(obj=>{
      this.onSuccessfulOperation("'Booking Successful");
    });
    
  }

  nextCard() {
    this.isNextCard = true;
  }

  availableSeat(seat : number)
  {
    this.seatsAvailable = this.seatsAvailable == seat ? 0 : seat;
  }

  stops():FormArray {
    return this.stopsForm.get('stops') as FormArray;
  }

  addStop()
  {
    this.stops().push(new FormControl());
  }

  onSuccessfulOperation(msg : string)
  {
    this.responseMsg = msg;
    this.isSuccess = true;
    this.toShow = true;
    setTimeout(()=>{
      this.toShow = false;
      this.router.navigate(["myrides"]);
    },1200)
  }

  onUnsuccessfulOperation(msg:string)
  {
    this.responseMsg = msg == ""?"Some error occured" : msg ;
    this.isSuccess = false;
    this.toShow = true;
    setTimeout(()=>{
      this.toShow = false;
    },2000)
  }

}
