import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ["../../../assets/slide/slide-1.png", "../../../assets/slide/slide-2.png", "../../../assets/slide/slide-3.png"];
}
