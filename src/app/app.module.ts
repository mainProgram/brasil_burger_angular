import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CardComponent } from './catalogue/card/card.component';
import { HttpClientModule } from "@angular/common/http";
import { CatalogueDetailComponent } from './catalogue/catalogue-detail/catalogue-detail.component';
import { PanierComponent } from './panier/panier.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { CommandeComponent } from './commande/commande.component';
import { CommandeDetailComponent } from './commande/commande-detail/commande-detail.component';
import { FormatEtat } from './shared/pipes/format-etat.pipe';
import { GenericListFilterModule } from 'generic-list-filter';
import { TailleBoissonPipe } from './shared/pipes/tailleBoissonPipe';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: 
  [
    AppComponent,
    HomeComponent,
    CatalogueComponent,
    NotFoundComponent,
    CardComponent,
    CatalogueDetailComponent,
    PanierComponent,
    CarouselComponent,
    CommandeComponent,
    CommandeDetailComponent,
    FormatEtat,
    TailleBoissonPipe
  ],
  imports: [
    RouterModule,
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GenericListFilterModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
