import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivraisonsRoutingModule } from './livraisons-routing.module';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonCreateComponent } from './livraison-create/livraison-create.component';


@NgModule({
  declarations: [
    LivraisonsComponent,
    LivraisonDetailComponent,
    LivraisonCreateComponent,
  ],
  imports: [
    CommonModule,
    LivraisonsRoutingModule
  ]
})
export class LivraisonsModule { }
