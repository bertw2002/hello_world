import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from '../app/parent/parent.component';
import { CalculatorComponent } from '../app/calculator/calculator.component';

const routes: Routes = [
  {path:'Parent', component: ParentComponent},
  {path:'Calculator', component: CalculatorComponent},
  {path:'Calcmain', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
