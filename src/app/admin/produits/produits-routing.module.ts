import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  { path: "", component: ProduitsComponent },
  { path: "new", component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
