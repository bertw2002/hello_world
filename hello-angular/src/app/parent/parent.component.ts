import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data:string[];
  sub:any;
  bruh="hello";
  constructor() {
    this.data=[];
  }

  addData(data: string){
    this.data.push(data);
    console.log(this.data);
  }
  ngOnInit(): void {
  }

}
