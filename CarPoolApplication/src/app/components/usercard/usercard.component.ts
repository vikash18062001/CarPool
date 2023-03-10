import { Component } from '@angular/core';

@Component({
  selector: 'usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent {
  Name : string = "Clint Barton";
  Destination: string = "Minneapolis";
  Source: string = "cincinnatti"
  Date: string = "xx/mm/yyy";
  Time:string = "5am-9am";
  Price:string = "180$";
  AvailableSeats :number = 2;
}
