import { Component, Input, OnInit } from '@angular/core';
import { ICatalogue } from 'src/app/interface/catalogue';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  produit!: any ;

  constructor() { }


  ngOnInit(): void {
  }

}
