import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicModule } from '../public/public.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { CommandeModule } from './commandes/commandes.module';
import { LivraisonsModule } from './livraisons/livraisons.module';
import { ProduitsModule } from './produits/produits.module';
import { LivreursModule } from './livreurs/livreurs.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PublicModule,
    CommandeModule,
    Daterangepicker,
    LivraisonsModule,
    ProduitsModule,
    LivreursModule
  ],
  exports: [
    DashboardComponent,
    CommonModule,
    AdminRoutingModule,
    PublicModule,
    CommandeModule,
    Daterangepicker,
    LivraisonsModule,
    ProduitsModule,
    LivreursModule
  ]
})
export class AdminModule { }
