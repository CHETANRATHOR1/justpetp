import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoauthRoutingModule } from './noauth-routing.module';
import { NoauthComponent } from './noauth.component';


@NgModule({
  declarations: [
    NoauthComponent
  ],
  imports: [
    CommonModule,
    NoauthRoutingModule
  ]
})
export class NoauthModule { }
