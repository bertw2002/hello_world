import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  animations: [trigger('panelState', [
    state('closed', style({height:'32px', overflow: 'hidden'})),
    state('open', style({height: '*'})),
    transition('closed <=> open', animate('300ms ease-in-out')),
  ]),]
})
export class CalculatorComponent implements OnInit {
  public secondOp=false;
  public operator:string;
  public num1=0;
  public num2=0;
  public numDisplay=0;
  public num3:number;
  public arr_num:number[] = [];
  add0(){
    if (this.secondOp){
      this.num2=this.num2*10;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10;
      this.numDisplay=this.num1;
    }
  }
  add1(){
    if (this.secondOp){
      this.num2=this.num2*10+1;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+1;
      this.numDisplay=this.num1;
    }
  }
  add2(){
    if (this.secondOp){
      this.num2=this.num2*10+2;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+2;
      this.numDisplay=this.num1;
    }
  }
  add3(){
    if (this.secondOp){
      this.num2=this.num2*10+3;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+3;
      this.numDisplay=this.num1;
    }
  }
  add4(){
    if (this.secondOp){
      this.num2=this.num2*10+4;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+4;
      this.numDisplay=this.num1;
    }
  }
  add5(){
    if (this.secondOp){
      this.num2=this.num2*10+5;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+5;
      this.numDisplay=this.num1;
    }
  }
  add6(){
    if (this.secondOp){
      this.num2=this.num2*10+6;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+6;
      this.numDisplay=this.num1;
    }
  }
  add7(){
    if (this.secondOp){
      this.num2=this.num2*10+7;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+7;
      this.numDisplay=this.num1;
    }
  }
  add8(){
    if (this.secondOp){
      this.num2=this.num2*10+8;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+8;
      this.numDisplay=this.num1;
    }
  }
  add9(){
    if (this.secondOp){
      this.num2=this.num2*10+9;
      this.numDisplay=this.num2;
    }
    else{
      this.num1=this.num1*10+9;
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
