import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LayoutModule
  ],
  exports: [
    LayoutModule
  ]
})
export class PublicModule { }
