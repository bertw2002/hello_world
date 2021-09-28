import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  dataChild:string[];
  @Output() toParent = new EventEmitter();
  constructor() {
    this.dataChild=[];
  }

  addData(data: string){
    this.dataChild.push(data);
  }
  ngOnInit(): void {
  }

}
