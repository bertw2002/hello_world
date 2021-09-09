import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('panelState', [
    state('closed', style({height:'32px', overflow: 'hidden'})),
    state('open', style({height: '*'})),
    transition('closed <=> open', animate('300ms ease-in-out')),
]),],
})

export class AppComponent {
  title = 'hello-angular';
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
    console.log(this.arr_num);
    this.num1=0;
    this.num2=0;
    this.secondOp=false;
    this.operator="null";
  }

  selectionSort(){
    let new_arr:number[]=[];
    new_arr=this.arr_num;
    for (let i = 0; i < new_arr.length;i++){
        //create the minimum number with the first loop.
        let minNum = new_arr[i];
        let minIndex = i;
        for (let c = i+1; c < new_arr.length; c++){
            //find the new minimum
            if (minNum > new_arr[c]){
                minIndex = c;
                minNum = new_arr[c];
            }
        }
        //switch current minimum with new minimum.
        let numTemp = new_arr[i];
        new_arr[i]=minNum;
        new_arr[minIndex]=numTemp;
        this.arr_num=new_arr;
    }
    console.log(this.arr_num);
}


}
