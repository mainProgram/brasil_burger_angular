import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueDetailComponent } from './catalogue/catalogue-detail/catalogue-detail.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'catalogue', component: CatalogueComponent }, 
  { path: 'catalogue/:id', component: CatalogueDetailComponent }, 
  { path: 'panier', component: PanierComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }