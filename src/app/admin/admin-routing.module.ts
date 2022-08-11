import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "", loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandeModule)},
  { path: "produits", loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)},
  { path: 'commandes', loadChildren: () =>  import('./commandes/commandes.module').then(m => m.CommandeModule)},
  { path: "livraisons", loadChildren: () => import('./livraisons/livraisons.module').then(m => m.LivraisonsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
