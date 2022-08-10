import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { CreateComponent } from './create/create.component';
import { ProduitsComponent } from './produits/produits.component';


@NgModule({
  declarations: [
    CreateComponent,
    ProduitsComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }
