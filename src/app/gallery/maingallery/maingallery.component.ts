import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maingallery',
  templateUrl: './maingallery.component.html',
  styleUrls: ['./maingallery.component.css']
})
export class MaingalleryComponent implements OnInit {

  
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
      },
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
