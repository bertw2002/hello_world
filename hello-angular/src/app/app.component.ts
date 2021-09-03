import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
  public num1:number;
  public num2:number;
  public num3:number;
  public arr_num:number[] = [];
  multiply(){
    this.num3=this.num1*this.num2;
    //(this.arr_num).push(this.num3);
    this.arr_num=[... this.arr_num, this.num3];
    console.log(this.arr_num);
  }
  add(){
    this.num3=this.num1+this.num2;
    //this.arr_num.push(this.num3);
  }
  subtract(){
    this.num3=this.num1-this.num2;
    //this.arr_num.push(this.num3);
  }
  divide(){
    this.num3=this.num1/this.num2;
    //this.arr_num.push(this.num3);
  }
}
