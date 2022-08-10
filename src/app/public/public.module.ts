import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LayoutModule } from './layout/layout.module';
import { FormatEtat } from '../shared/pipes/format-etat.pipe';


@NgModule({
  declarations: [
    FormatEtat
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    FormatEtat
  ]
})
export class PublicModule { }
