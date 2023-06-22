import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreursRoutingModule } from './livreurs-routing.module';
import { LivreurDetailComponent } from './livreur-detail/livreur-detail.component';
import { LivreursComponent } from './livreurs/livreurs.component';
import { LivreurCreateComponent } from './livreur-create/livreur-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LivreursComponent,
    LivreurDetailComponent,
    LivreurCreateComponent
  ],
  imports: [
    CommonModule,
    LivreursRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class LivreursModule { }
