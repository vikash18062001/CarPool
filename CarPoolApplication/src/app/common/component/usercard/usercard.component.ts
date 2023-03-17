import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent {

  @Input() cardData = new Input();
  @Input() sourceLocation = new Input();
  @Input() destinationLocation = new Input();
  @Output() rideBook = new EventEmitter();
  userName : string = "Clint Barton";
  destination: string = "Minneapolis";
  source: string = "cincinnatti"
  date: string = "xx/mm/yyy";
  time:string = "5am-9am";
  price !: number ;
  availableSeats :number = 2;

  ngOnChanges()
  {
    this.userName = "";
    this.destination = this.destinationLocation ;
    this.source = this.sourceLocation ;
    this.date = this.cardData.date;
    this.time = this.cardData.time;
    this.availableSeats = this.cardData.availableSeats;
    this.price = this.cardData.price;
  }

  onCardClick()
  {
    this.rideBook.emit(this.cardData);
  }
}
