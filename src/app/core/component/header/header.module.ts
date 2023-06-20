import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HeaderModule { }
