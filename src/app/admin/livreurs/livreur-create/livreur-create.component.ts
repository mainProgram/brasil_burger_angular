import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-livreur-create',
  templateUrl: './livreur-create.component.html',
  styleUrls: ['./livreur-create.component.scss']
})
export class LivreurCreateComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group(
      {
        email: new FormControl('', Validators.compose(
          [
            Validators.required,
            Validators.email
          ]
        ),),
        nom: new FormControl('', Validators.compose(
          [
            Validators.required, 
            Validators.minLength(2)
          ]
        )),
        prenom: new FormControl('', Validators.compose(
          [
            Validators.required,
            Validators.minLength(2)
          ]
        )),

        password: new FormControl('', Validators.compose(
          [
            Validators.required, 
            Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$")
          ]
        )),
        confirmPassword: new FormControl('', Validators.compose([ Validators.required])),
        adresse: new FormControl(''),
        telephone: new FormControl('', Validators.compose(
          [
            Validators.required,
            Validators.pattern("^(77|78|75|76|70|33)[0-9]{7}$")
          ]
        ),),
      },
      {
        validators:this.mustMatch('password', 'confirmPassword')
      }
    )
   }

  ngOnInit(): void {
  }

  public reactiveForm: FormGroup

  public get f(){  return this.reactiveForm.controls }

  public mustMatch(password:any, confirmPassword:any)
  {
    return(formGroup : FormGroup) => {
      const passwordControl = formGroup.controls[password]
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if(confirmPasswordControl.errors && !confirmPasswordControl.errors['mustMatch'])
        return;

      (confirmPasswordControl.value !== passwordControl.value) 
      ? confirmPasswordControl.setErrors({ mustMatch : true})
      : confirmPasswordControl.setErrors(null);
    }
  }

  public onSubmit(){  
    let form = (this.reactiveForm.value);
    this.authService.inscription(form)
  }
}
