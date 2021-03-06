import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  public secondOp = false;
  public operator:string;
  public num1 = 0;
  public num2 = 0;
  public numDisplay = 0;
  public num3:number;
  public arr_num:number[] = [];
  add(num: number){
    if (this.secondOp){
      this.num2=this.num2*10+num;
      this.numDisplay=this.num2;
    }else{
      this.num1=this.num1*10+num;
      this.numDisplay=this.num1;
    }
  }
  addSub(){
    if (!this.secondOp){
      this.operator="-";
      this.secondOp=true;
    }
  }
  addDiv(){
    if (!this.secondOp){
      this.operator="/";
      this.secondOp=true;
    }
  }
  addAdd(){
    if (!this.secondOp){
      this.operator="+";
      this.secondOp=true;
    }
  }
  addMult(){
    if (!this.secondOp){
      this.operator="*";
      this.secondOp=true;
    }
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
    this.numDisplay=this.num3;
    this.arr_num=[... this.arr_num, this.num3];
    this.num1=0;
    this.num2=0;
    this.secondOp=false;
    this.operator="null";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
