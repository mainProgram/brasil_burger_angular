import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { NotFoundComponent } from './public/not-found/not-found.component';
import { ClientModule } from './client/client.module';
// import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { registerLocaleData } from '@angular/common'; 
import localeFr from '@angular/common/locales/fr'; 
import { NgxPaginationModule } from 'ngx-pagination';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: 
  [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    PublicModule,
    ClientModule,
    NgxPaginationModule
  ],
  providers: [
    // TokenInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
