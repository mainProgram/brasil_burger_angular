import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { CreateComponent } from './create/create.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';


@NgModule({
  declarations: [
    CreateComponent,
    ProduitsComponent,
    ProduitDetailComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class ProduitsModule { }
