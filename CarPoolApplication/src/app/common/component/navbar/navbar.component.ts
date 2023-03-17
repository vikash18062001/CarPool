import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isShowDropDown: boolean = false;

  showDropDown()
  {
    this.isShowDropDown = !this.isShowDropDown;
  }
}
