import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {HeaderModule} from "../../core/component/header/header.module";
import {CardModule} from "../../core/component/card/card.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    CardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
