import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../public/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "", loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandeModule)},
  { path: "produits", loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)},
  { path: "livraisons", loadChildren: () => import('./livraisons/livraisons.module').then(m => m.LivraisonsModule)},
  { path: "dashboard", component: DashboardComponent},
  { path: 'commandes', loadChildren: () =>  import('./commandes/commandes.module').then(m => m.CommandeModule)},
  { path: "**",component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
