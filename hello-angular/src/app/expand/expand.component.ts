import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.css'],
  animations: [trigger('panelState', [
    state('closed', style({height:'32px', overflow: 'hidden'})),
    state('open', style({height: '*'})),
    transition('closed <=> open', animate('300ms ease-in-out')),
]),],
})

export class ExpandComponent {
  contract = 'closed';
  expandToggle(){
    this.contract = this.contract === 'open' ? 'closed' : 'open';
  }
}
