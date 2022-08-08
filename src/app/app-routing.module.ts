import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommandeDetailComponent } from "./commande/commande-detail/commande-detail.component";
import { CommandeComponent } from "./commande/commande.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    { path: 'commandes', component: CommandeComponent }, 
    { path: 'commandes/:id', component: CommandeDetailComponent }, 
    { path: '', redirectTo: 'home',pathMatch:"full"}, 
    // { path: 'login', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
    {path: 'auth', loadChildren: () =>  import('./auth/auth.module').then(m => m.AuthModule)},
    {    path: '', loadChildren: () =>  import('./public/public.module').then(m => m.PublicModule)},
    { path: "**",component: NotFoundComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  