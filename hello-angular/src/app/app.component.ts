import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hello-angular';
  public arr1:string[]=[];
  public num1:number;
  public num2:number;
  public num3:number;
  public arr_num:number[] = [];
  add0(){
    this.arr1=[... this.arr1, "0"];
  }
  add1(){
    this.arr1=[... this.arr1, "1"];
  }
  add2(){
    this.arr1=[... this.arr1, "2"];
  }
  add3(){
    this.arr1=[... this.arr1, "3"];
  }
  add4(){
    this.arr1=[... this.arr1, "4"];
  }
  add5(){
    this.arr1=[... this.arr1, "5"];
  }
  add6(){
    this.arr1=[... this.arr1, "6"];
  }
  add7(){
    this.arr1=[... this.arr1, "7"];
  }
  add8(){
    this.arr1=[... this.arr1, "8"];
  }
  add9(){
    this.arr1=[... this.arr1, "9"];
  }
  addSub(){
    if (this.arr1.length!=0) {
      if (this.arr1[-1]!="+" || this.arr1[-1]!="/" || this.arr1[-1]!="*") {
        this.arr1=[... this.arr1, "-"];
      }

    }
  }
  addDiv(){
    this.arr1=[... this.arr1, "/"];
  }
  addAdd(){
    this.arr1=[... this.arr1, "+"];
  }
  addMult(){
    this.arr1=[... this.arr1, "*"];
  }
  multiply(){
    this.num3=this.num1*this.num2;
    //(this.arr_num).push(this.num3);
    this.arr_num=[... this.arr_num, this.num3];
  }
  add(){
    this.num3=this.num1+this.num2;
    //this.arr_num.push(this.num3);
    this.arr_num=[... this.arr_num, this.num3];
  }
  subtract(){
    this.num3=this.num1-this.num2;
    //this.arr_num.push(this.num3);
    this.arr_num=[... this.arr_num, this.num3];
  }
  divide(){
    this.num3=this.num1/this.num2;
    //this.arr_num.push(this.num3);
    this.arr_num=[... this.arr_num, this.num3];
  }
}
