import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HasRoleDirective } from "src/app/shared/has-role.directive";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [ 
        FooterComponent,
        HeaderComponent,
        HasRoleDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ]
})

export class LayoutModule { }
