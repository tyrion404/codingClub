import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  v: any;

  constructor() { }

  ngOnInit() {
    this.v = [
        {
          title: 'Lorem Ipsum',
          dec: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.',
          ID: '1',
        },
      {
        title: 'Dolor Sitema',
        dec: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.',
        ID: '2',
      },
      {
        title: 'Sed ut perspiciatis',
        dec: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.',
        ID: '3',
      },
      {
        title: 'Magni Dolores',
        dec: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera',
        ID: '4',
      }

        ];
  }

}
