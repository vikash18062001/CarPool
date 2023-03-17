import { Component } from '@angular/core';
import { Ride } from 'src/app/models/ride';
import { AccountService } from 'src/app/services/account.service';
import { BookrideService } from 'src/app/services/bookride.service';
import { OfferrideService } from 'src/app/services/offerride.service';
import { Utility } from 'src/app/utility/utility';


@Component({
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.scss']
})
export class MyridesComponent {

  bookedRides: Array<Ride> = [];
  offeredRides: Array<Ride> = [];

  constructor(private bookRideService: BookrideService, private offerRideService: OfferrideService,private accountService : AccountService) {
  }

  ngOnInit() {
    // console.log(Utility.loggedInUser.id);

    this.bookRideService.getBookedRides(Utility.loggedInUser.id).subscribe(ride => {
      ride.forEach(element => {
        this.accountService.getUserByUserId(element.rideTakenBy).subscribe(user =>
          {
            element.userName = user.userName;
            this.bookedRides.push(element);
          }) 
      });
    });

    this.offerRideService.getOfferedRides(Utility.loggedInUser.id).subscribe(rides => {
      rides.forEach(element => {
        this.accountService.getUserByRideId(element.rideId).subscribe(user =>
          {
            user.forEach(user=>{
              element.userName = user.userName;
              this.offeredRides.push(element);
              console.log(this.offeredRides);
              
            })
          }) 
      })
    });
  }
} 
