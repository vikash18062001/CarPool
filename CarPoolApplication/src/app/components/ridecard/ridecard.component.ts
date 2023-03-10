import { Component } from '@angular/core';

@Component({
  selector: 'ridecard',
  templateUrl: './ridecard.component.html',
  styleUrls: ['./ridecard.component.scss']
})
export class RidecardComponent {

  timeSlots: Array<string> = [
    "5am - 9am","9am - 12pm","12pm - 3pm","3pm - 6pm","6pm - 9pm"
  ];

  cardHeading: string = "Book a ride";


  onSubmit(){}


}
