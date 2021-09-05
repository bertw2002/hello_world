import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hello-angular';
  public arr1:string[]=[];
  public switch=false;
  public num1:number;
  public num2:number;
  public num3:number;
  public arr_num:number[] = [];
  add0(){
    if (switch){
      this.arr2=[... this.arr2, "0"];
    }
    else{
      this.arr1=[... this.arr1, "0"];
    }
  }
  add1(){
    if (switch){
      this.arr2=[... this.arr2, "1"];
    }
    else{
      this.arr1=[... this.arr1, "1"];
    }
  }
  add2(){
    if (switch){
      this.arr2=[... this.arr2, "2"];
    }
    else{
      this.arr1=[... this.arr1, "2"];
    }
  }
  add3(){
    if (switch){
      this.arr2=[... this.arr2, "3"];
    }
    else{
      this.arr1=[... this.arr1, "3"];
    }
  }
  add4(){
    if (switch){
      this.arr2=[... this.arr2, "4"];
    }
    else{
      this.arr1=[... this.arr1, "4"];
    }
  }
  add5(){
    if (switch){
      this.arr2=[... this.arr2, "5"];
    }
    else{
      this.arr1=[... this.arr1, "5"];
    }
  }
  add6(){
    if (switch){
      this.arr2=[... this.arr2, "6"];
    }
    else{this.arr1=[... this.arr1, "6"];}
  }
  add7(){
    if (switch){
      this.arr2=[... this.arr2, "7"];
    }
    else{
      this.arr1=[... this.arr1, "7"];
    }
  }
  add8(){
    if (switch){
      this.arr2=[... this.arr2, "8"];
    }
    else{
      this.arr1=[... this.arr1, "8"];
    }
  }
  add9(){
    if (switch){
      this.arr2=[... this.arr2, "9"];
    }
    else{
      this.arr1=[... this.arr1, "9"];
    }
    console.log(this.arr1);
    console.log(this.arr2);
  }
  addSub(){
    let len=this.arr1.length;
    if (len!=0) {
      if (this.arr1[len-1]!="+" && this.arr1[len-1]!="/" && this.arr1[len-1]!="*" && this.arr1[len-1]!="-") {
        this.arr1=[... this.arr1, "-"];
        this.switch=true;
      }
    }
  }
  addDiv(){
    let len=this.arr1.length;
    if (len!=0) {
      if (this.arr1[len-1]!="+" && this.arr1[len-1]!="/" && this.arr1[len-1]!="*" && this.arr1[len-1]!="-") {
        this.arr1=[... this.arr1, "/"];
        this.switch=true;
      }
    }
  }
  addAdd(){
    let len=this.arr1.length;
    if (len!=0) {
      if (this.arr1[len-1]!="+" && this.arr1[len-1]!="/" && this.arr1[len-1]!="*" && this.arr1[len-1]!="-") {
        this.arr1=[... this.arr1, "+"];
        this.switch=true;
      }
    }
  }
  addMult(){
    let len=this.arr1.length;
    if (len!=0) {
      if (this.arr1[len-1]!="+" && this.arr1[len-1]!="/" && this.arr1[len-1]!="*" && this.arr1[len-1]!="-") {
        this.arr1=[... this.arr1, "*"];
        this.switch=true;
      }
    }
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
