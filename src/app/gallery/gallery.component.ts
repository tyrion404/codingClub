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
        Url: '../assets/img/gallery/1.jpeg',
        Id: '1'
      },
      {
        Url: '../assets/img/gallery/2.jpeg',
        Id: '2'
      },
      {
        Url: '../assets/img/gallery/3.jpeg',
        Id: '3'
      },
      {
        Url: '../assets/img/gallery/4.jpeg',
        Id: '4'
      }
    ]
  }

}
