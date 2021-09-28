import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-calcmain',
  templateUrl: './calcmain.component.html',
  styleUrls: ['./calcmain.component.css'],
  animations: [trigger('panelState', [
    state('closed', style({height:'32px', overflow: 'hidden'})),
    state('open', style({height: '*'})),
    transition('closed <=> open', animate('300ms ease-in-out')),
  ]),]
})
export class CalcmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
