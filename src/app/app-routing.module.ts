import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogueDetailComponent } from "./catalogue/catalogue-detail/catalogue-detail.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'catalogue', component: CatalogueComponent }, 
    { path: 'catalogue/:id', component: CatalogueDetailComponent }, 
    { path: '', redirectTo: 'home',pathMatch:"full"}, 
    // { path: 'login', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
    { path: "**",component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  