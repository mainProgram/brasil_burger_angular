import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicModule } from '../public/public.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { CommandeModule } from './commandes/commandes.module';
import { LivraisonsModule } from './livraisons/livraisons.module';
import { ProduitsModule } from './produits/produits.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PublicModule,
    CommandeModule,
    Daterangepicker,
    LivraisonsModule,
    ProduitsModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class AdminModule { }
