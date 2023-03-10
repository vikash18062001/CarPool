import { Component } from '@angular/core';

@Component({
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.scss']
})
export class MyridesComponent {

  isShowDropDown: boolean = false;

  showDropDown()
  {
    this.isShowDropDown = !this.isShowDropDown;
  }
}
