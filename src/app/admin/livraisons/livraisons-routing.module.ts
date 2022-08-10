import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonLivreurComponent } from './livraison-livreur/livraison-livreur.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';

const routes: Routes = [
  { path: "", component: LivraisonsComponent},
  { path: "livreur/:id", component: LivraisonLivreurComponent },
  { path: ":id", component: LivraisonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonsRoutingModule { }
