import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ExpandComponent} from './expand/expand.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcmainComponent } from './calcmain/calcmain.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandComponent,
    ParentComponent,
    ChildComponent,
    CalculatorComponent,
    CalcmainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
