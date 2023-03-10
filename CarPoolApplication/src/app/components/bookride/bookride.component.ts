import { Component } from '@angular/core';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.scss']
})
export class BookrideComponent {

  timeSlots: Array<string> = [
    "5am - 9am","9am - 12pm","12pm - 3pm","3pm - 6pm","6pm - 9pm"
  ];

  cardHeading: string = "Book a ride";


  onSubmit(){}
}
