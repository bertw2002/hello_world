import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hello-angular';
  public secondOp=false;
  public operator:string;
  public num1=0;
  public num2=0;
  public num3:number;
  public arr_num:number[] = [];
  add0(){
    if (this.secondOp){
      this.num2=this.num2*10;
    }
    else{
      this.num1=this.num1*10;
    }
  }
  add1(){
    if (this.secondOp){
      this.num2=this.num2*10+1;
    }
    else{
      this.num1=this.num1*10+1;
    }
  }
  add2(){
    if (this.secondOp){
      this.num2=this.num2*10+2;
    }
    else{
      this.num1=this.num1*10+2;
    }
  }
  add3(){
    if (this.secondOp){
      this.num2=this.num2*10+3;
    }
    else{
      this.num1=this.num1*10+3;
    }
  }
  add4(){
    if (this.secondOp){
      this.num2=this.num2*10+4;
    }
    else{
      this.num1=this.num1*10+4;
    }
  }
  add5(){
    if (this.secondOp){
      this.num2=this.num2*10+5;
    }
    else{
      this.num1=this.num1*10+5;
    }
  }
  add6(){
    if (this.secondOp){
      this.num2=this.num2*10+6;
    }
    else{
      this.num1=this.num1*10+6;
    }
  }
  add7(){
    if (this.secondOp){
      this.num2=this.num2*10+7;
    }
    else{
      this.num1=this.num1*10+7;
    }
  }
  add8(){
    if (this.secondOp){
      this.num2=this.num2*10+8;
    }
    else{
      this.num1=this.num1*10+8;
    }
  }
  add9(){
    if (this.secondOp){
      this.num2=this.num2*10+9;
    }
    else{
      this.num1=this.num1*10+9;
    }
  }
  addSub(){
    this.operator="-";
    this.secondOp=true;
  }
  addDiv(){
    this.operator="/";
    this.secondOp=true;
  }
  addAdd(){
    this.operator="+";
    this.secondOp=true;
  }
  addMult(){
    this.operator="*";
    this.secondOp=true;
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
  calculate(){
    if (this.operator=="null"){
      return;
    }
    if (this.operator=="-"){
      this.num3=this.num1-this.num2;
    }
    if (this.operator=="+"){
      this.num3=this.num1+this.num2;
    }
    if (this.operator=="*"){
      this.num3=this.num1*this.num2;
    }
    if (this.operator=="/"){
      this.num3=this.num1/this.num2;
    }
    this.arr_num=[... this.arr_num, this.num3];
    this.num1=0;
    this.num2=0;
    this.secondOp=false;
    this.operator="null";
  }
}
