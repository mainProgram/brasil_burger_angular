import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivraisonCreateComponent } from './livraison-create/livraison-create.component';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonLivreurComponent } from './livraison-livreur/livraison-livreur.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';

const routes: Routes = [
  { path: "", component: LivraisonsComponent},
  { path: "new", component: LivraisonCreateComponent},
  { path: ":id", component: LivraisonDetailComponent},
  { path: "livreur/:id", component: LivraisonLivreurComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonsRoutingModule { }
