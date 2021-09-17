import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router){}
  title = 'hello-angular';
  redirectParent(){
    this.router.navigate(['Parent']);
  }
  redirectCalculator(){
    this.router.navigate(['Calculator']);
  }


}
