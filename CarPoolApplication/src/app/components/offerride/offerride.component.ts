import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offerride',
  templateUrl: './offerride.component.html',
  styleUrls: ['./offerride.component.scss']
})
export class OfferrideComponent {
  timeSlots: Array<string> = [
    "5am - 9am","9am - 12pm","12pm - 3pm","3pm - 6pm","6pm - 9pm"
  ];
  stopCounts : number = 1;

  stopsForm : FormGroup ;

  isNextCard : boolean = false;

  constructor(private fb:FormBuilder)
  {
    this.stopsForm = this.fb.group({stops:this.fb.array([this.fb.control('')])});
  }

  onSubmit(){}

  stops():FormArray {
    return this.stopsForm.get('stops') as FormArray;
  }
  addStop()
  {
    this.stops().push(new FormControl());
  }

  nextCard() {
    this.isNextCard = true;
  }
}
