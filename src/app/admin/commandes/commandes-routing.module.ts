import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { CommandesComponent } from './commandes.component';

const routes: Routes = [
  { path: "", component: CommandesComponent},
  { path: "commandes", component: CommandesComponent},
  { path: "commandes/:param", component: CommandeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
