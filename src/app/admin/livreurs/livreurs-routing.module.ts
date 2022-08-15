import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreurCreateComponent } from './livreur-create/livreur-create.component';
import { LivreurDetailComponent } from './livreur-detail/livreur-detail.component';
import { LivreursComponent } from './livreurs/livreurs.component';

const routes: Routes = [
  { path: "", component: LivreursComponent, pathMatch: "full" },
  { path: "new", component: LivreurCreateComponent, pathMatch: "full" },
  { path: ":id", component: LivreurDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreursRoutingModule { }
