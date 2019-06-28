import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  v: any;

  constructor() { }

  ngOnInit() {
    this.v =[
      {
        Url: '../assets/img/gallery/1.jpg',
        Id: '1'
      },
      {
        Url: '../assets/img/gallery/2.jpg',
        Id: '2'
      },
      {
        Url: '../assets/img/gallery/3.jpg',
        Id: '3'
      },
      {
        Url: '../assets/img/gallery/4.jpg',
        Id: '4'
      }
    ]
  }

}
