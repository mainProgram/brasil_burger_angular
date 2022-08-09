import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CommandeComponent } from './commande/commande.component';
import { CommandeDetailComponent } from './commande/commande-detail/commande-detail.component';
import { FormatEtat } from './shared/pipes/format-etat.pipe';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { LayoutModule } from './public/layout/layout.module';
import { NotFoundComponent } from './public/not-found/not-found.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    NotFoundComponent,
    CommandeComponent,
    CommandeDetailComponent,
    FormatEtat
    ],
  imports: [
    RouterModule,
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
