import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public tabTailles : any
  public varietesBoissons : any
  public tabBurgers : any
  public tabFrites : any
  selectedItems: any

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) { 
    this.reactiveForm = this.formBuilder.group(
      {
        nom: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(2),
          ]),
        ),
        quantiteStock: new FormControl('', Validators.compose([
            Validators.required, 
            Validators.min(1),
            Validators.pattern('^(0|[1-9][0-9]*)$')
          ]
        )),
        prix: new FormControl('', Validators.compose([
            Validators.required, 
            Validators.min(100),
            Validators.pattern('^(0|[1-9][0-9]*)$')
          ]
        )),
        imageWrapper: new FormControl('', Validators.compose([
            Validators.required,
            this.requiredFileType('png'),
          ]
        )),
        detail: new FormControl(''),
        categorie: new FormControl(''),
        boisson: new FormControl(''),
        taille: new FormControl(''),
        burgers:  this.formBuilder.array([]),
        frites:  this.formBuilder.array([]),
        tailles:  this.formBuilder.array([]),
      },
    )
  }

  ngOnInit(): void {
    this.tabTailles = this.produitService.getAllTailles(1)

    this.varietesBoissons = this.produitService.getAllVarieteBoissons(1)

    this.tabBurgers = this.produitService.getAllBurgers(1)

    this.tabFrites = this.produitService.getAllFrites(1)
  }

  public get f(){  return this.reactiveForm.controls }

  public onSubmit(){  
    let form = (this.reactiveForm.value);

    form.categorie = this.changeCategorie()

    console.log(form);    
    form.detail="";
    
    // this.produitService.ajouterProduit(form)
      this.produitService.ajouterProduit(form).subscribe({
      next: data => { alert(data)},
      error: err => { alert(err)}
    }); 
  }

  public changeCategorie(){  
    this.reset();    
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

  public onFileChange(event) {
    
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
    console.log(("after")); 
  }

  // onCheckboxChange(event: any) {
    
  //   const burgers = (this.reactiveForm.controls['burgers'] as FormArray);
  //   let burger : any = {
  //     burger: "",
  //     quantite: "",
  //   }
    
  //   if(event.target.type == "checkbox")
  //   {
  //     if (event.target.checked) 
  //     {
  //       if(+event.target.nextElementSibling.value > 0)
  //       {
  //         burger[Object.keys(burger)[0]] = event.target.value
  //         burger.quantite = event.target.nextElementSibling.value
          
  //         burgers.push(this.formBuilder.group(burger));
  //         console.log(burgers.value);
  //       }
  //     } 
  //     else
  //     {        
  //       let index = -1;

  //       for(let i = 0; i < burgers.value.length; i++)
  //         if(event.target.value == burgers.value[i][Object.keys(burger)[0]])
  //           index = i

  //       if(index != -1)
  //         burgers.removeAt(index);
  //     }
  //   }
  //   else
  //   {
  //     console.log(burgers.value);
  //     for(let i = 0; i < burgers.value.length; i++)
  //       if(event.target.previousElementSibling.value == burgers.value[i][Object.keys(burger)[0]]) 
  //         burgers.value[i].quantite = event.target.value

  //   }
  // }

  onCheckboxChange(event: any, type: any) {
    
    // frites, tailles, burgers
    let obj: any

    if (type == "frites")
    {
      obj = {
        frite: "",
        quantite: 0,
      }
    }else if(type == "burgers") 
      obj = {
        burger: "",
        quantite: 0,
      }
    else if(type == "tailles") 
      obj = {
        taille: "",
        quantite: 0,
      }

    const objets = (this.reactiveForm.controls[type] as FormArray);

    if(event.target.type == "checkbox")
    {
      if (event.target.checked) 
      {
        if(+event.target.nextElementSibling.value > 0)
        {
          obj[Object.keys(obj)[0]] = event.target.value
          obj.quantite = +event.target.nextElementSibling.value
          
          objets.push(this.formBuilder.group(obj));
        }
      } 
      else
      {        
        let index = -1;

        for(let i = 0; i < objets.value.length; i++)
          if(event.target.value == objets.value[i][Object.keys(obj)[0]])
            index = i

        if(index != -1)
          objets.removeAt(index);        
      }
      console.log(objets.value);

    }
    else
    {
      let bool = false
      for(let i = 0; i < objets.value.length; i++)
      {
        if(event.target.previousElementSibling.value == objets.value[i][Object.keys(obj)[0]]) 
        {
          objets.value[i].quantite = +event.target.value
          bool = true
        }
      }
      if(!bool && event.target.previousElementSibling.checked)
      {
        
        obj[Object.keys(obj)[0]] = event.target.previousElementSibling.value
        obj.quantite = +event.target.value
        
        objets.push(this.formBuilder.group(obj));
      }
      console.log(objets.value);
    }
  }

  public reset() {
    this.reactiveForm.reset();
    this.imageSrc = ""

    const tabObjets = ["burgers", "frites", "tailles"]
    tabObjets.forEach(item => this.remove(item))
  }

  public remove(type: string){
    const objets = (this.reactiveForm.controls[type] as FormArray);
    while ( objets.length > 0)
      objets.removeAt(0)
  }

  
}
