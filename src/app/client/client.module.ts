import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueDetailComponent } from './catalogue/catalogue-detail/catalogue-detail.component';
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { TailleBoissonPipe } from '../shared/pipes/tailleBoissonPipe';
import { CardComponent } from './catalogue/card/card.component';
import { GenericListFilterModule } from 'generic-list-filter';
import { CommandeComponent } from './commande/commande.component';
import { CommandeDetailComponent } from './commande/commande-detail/commande-detail.component';
import { FormatEtat } from '../shared/pipes/format-etat.pipe';


@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogueDetailComponent,
    PanierComponent,
    HomeComponent,
    TailleBoissonPipe,
    CardComponent,
    CommandeComponent,
    CommandeDetailComponent,
    FormatEtat
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    GenericListFilterModule,
  ],
  exports: [
    CatalogueComponent,
    CatalogueDetailComponent,
    PanierComponent,
    HomeComponent,
    TailleBoissonPipe,
    CardComponent,
    CommandeComponent,
    CommandeDetailComponent,
  ]
})
export class ClientModule { }