import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivraisonsRoutingModule } from './livraisons-routing.module';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonLivreurComponent } from './livraison-livreur/livraison-livreur.component';


@NgModule({
  declarations: [
    LivraisonsComponent,
    LivraisonDetailComponent,
    LivraisonLivreurComponent
  ],
  imports: [
    CommonModule,
    LivraisonsRoutingModule
  ]
})
export class LivraisonsModule { }
