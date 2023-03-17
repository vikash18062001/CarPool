import { Component, Input } from '@angular/core';

@Component({
  selector: 'alertstatus',
  templateUrl: './alertstatus.component.html',
  styleUrls: ['./alertstatus.component.scss']
})
export class AlertstatusComponent {

  @Input() isSuccess !: boolean;
  @Input() toShow !: boolean;
  @Input() responseMsg !: string;
}
