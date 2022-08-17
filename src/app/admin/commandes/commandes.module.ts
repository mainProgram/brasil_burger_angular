import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from 'src/app/public/public.module';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { CommandesComponent } from './commandes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommandesRoutingModule } from './commandes-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommandesComponent,
    CommandeDetailComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    CommandesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    CommandesComponent,
    CommandeDetailComponent,
  ]
})
export class CommandeModule { }
