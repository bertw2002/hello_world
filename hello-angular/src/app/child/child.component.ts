import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  dataChild:string[];
  str='';
  constructor() {
    this.dataChild=[];
  }

  addData(data: string){
    this.dataChild.push(data);
    console.log(this.dataChild);
  }
  ngOnInit(): void {
  }

}
