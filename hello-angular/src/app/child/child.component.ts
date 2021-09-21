import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  data:any;
  constructor() {
    this.data=[4,5,6];
  }

  ngOnInit(): void {
  }

}
