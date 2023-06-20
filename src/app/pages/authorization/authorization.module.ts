import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import {AuthorizationComponent} from "./authorization.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AuthorizationComponent],
    imports: [
        CommonModule,
        AuthorizationRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthorizationModule {}
