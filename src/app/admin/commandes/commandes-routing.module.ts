import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { CommandeZoneComponent } from './commande-zone/commande-zone.component';
import { CommandesComponent } from './commandes.component';

const routes: Routes = [
  { path: "", component: CommandesComponent},
  { path: "commandes", component: CommandesComponent},
  { path: "commandes/:id", component: CommandeDetailComponent},
  { path: "commandes/:zone", component: CommandeZoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
