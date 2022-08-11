import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./public/not-found/not-found.component";
import { AuthGuard } from "./_helpers/auth.guard";

const routes: Routes = [ 
    { path: 'auth', loadChildren: () =>  import('./auth/auth.module').then(m => m.AuthModule)},
    { path: '', loadChildren: () =>  import('./client/client.module').then(m => m.ClientModule)},
    { path: 'admin', loadChildren: () =>  import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard]},
    { path: "**",component: NotFoundComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
  