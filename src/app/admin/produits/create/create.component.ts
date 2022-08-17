import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduit } from 'src/app/shared/interface/interfaces';
import { ProduitService } from 'src/app/shared/service/produit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild("categorie") cat : ElementRef
  @ViewChild("ajouter") ajouter : ElementRef
  
  public reactiveForm: FormGroup
  public form: IProduit
  public imageSrc = ""

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) { 
    this.reactiveForm = this.formBuilder.group(
      {
        nom: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(2),
          ]),
        ),
        prix: new FormControl('', Validators.compose([
            Validators.required, 
            Validators.min(100),
            Validators.pattern('^(0|[1-9][0-9]*)$')
          ]
        )),
        imageWrapper: new FormControl('', Validators.compose([
            Validators.required,
            // this.requiredFileType('png')
          ]
        )),
        detail: new FormControl(''),
        categorie: new FormControl(''),
      }
    )
  }

  ngOnInit(): void {
  }

  public get f(){  return this.reactiveForm.controls }

  public onSubmit(){  
    let form = (this.reactiveForm.value);

    form.categorie = this.changeCategorie()

    console.log(form);
    
    this.produitService.ajouterProduit(form).subscribe({
      next: data => { console.log(data)},
      error: err => { console.log(err)}
    });
  }

  public changeCategorie()
  {
    return (this.cat.nativeElement.value);
  }

  public requiredFileType( type: string ) {
    return function (control: FormControl) {
      const file = control.value;
      if ( file ) {
        const extension = file.name.split('.')[1].toLowerCase();
        if ( type.toLowerCase() !== extension.toLowerCase() ) {
          return {
            requiredFileType: true
          };
        }
        
        return null;
      }
  
      return null;
    };
  }

  onFileChange(event) {
    
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      
      const [file] = event.target.files;
      
      reader.readAsDataURL(file); 
      
      reader.onload = () => 
      {
        this.imageSrc = reader.result as string;

        this.reactiveForm.patchValue({  
          imageWrapper: reader.result  
        });

      };
      this.afterLoadedImage()
    }
  }

  public afterLoadedImage()
  {
    alert("after");
    
  }
}
