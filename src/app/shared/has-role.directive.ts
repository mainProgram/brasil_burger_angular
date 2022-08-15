import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './service/auth.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {
  @Input()
  set appHasRole(role: string)
  {
    if(this.authService.hasRole(role)){
      console.log(1);
      
      this.viewContainerRef.createEmbeddedView(this.templateRef) //show the content
    }
    else
    {
      console.log(2);

      this.viewContainerRef.clear()                              //hide the content
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef:ViewContainerRef, private authService: AuthService) 
  { 

  }

}
