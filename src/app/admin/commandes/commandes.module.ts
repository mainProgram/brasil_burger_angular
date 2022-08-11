import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from 'src/app/public/public.module';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { CommandesComponent } from './commandes.component';
import { CommandesRoutingModule } from './commandes-routing.module';

@NgModule({
  declarations: [
    CommandesComponent,
    CommandeDetailComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    CommandesRoutingModule
  ],
  exports: [
    CommandesComponent,
    CommandeDetailComponent,
  ]
})
export class CommandeModule { }
