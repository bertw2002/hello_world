import { Component, Input } from '@angular/core';
@Component ({
  selector: 'app-comp',
  template:`<h1> parent component </h1>
  <app-compChild></app-compChild>
  `
})

export class comp {

}
