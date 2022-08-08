import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueDetailComponent } from './catalogue/catalogue-detail/catalogue-detail.component';
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { TailleBoissonPipe } from '../shared/pipes/tailleBoissonPipe';
import { CardComponent } from './catalogue/card/card.component';
import { GenericListFilterModule } from 'generic-list-filter';


@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogueDetailComponent,
    PanierComponent,
    HomeComponent,
    TailleBoissonPipe,
    CardComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    GenericListFilterModule,
  ],
  exports: [
    CatalogueComponent,
    CatalogueDetailComponent,
    PanierComponent,
    HomeComponent,
  ]
})
export class PublicModule { }
