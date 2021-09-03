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
  multiply(){
    this.num3=this.num1*this.num2;
  }
  add(){
    this.num3=this.num1+this.num2;
  }
  subtract(){
    this.num3=this.num1-this.num2;
  }
  divide(){
    this.num3=this.num1/this.num2;
  }
}
