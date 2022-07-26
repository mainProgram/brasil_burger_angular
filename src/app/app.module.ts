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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogueComponent,
    NotFoundComponent,
    CardComponent,
    CatalogueDetailComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
