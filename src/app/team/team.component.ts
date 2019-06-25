import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  v: any;

  constructor() { }

  ngOnInit() {

    this.v = [
      {mem_name: 'member 1',
        mem_post: 'postPost',
        ID: '1',
        Url: '../assets/img/team/1.jpg'
      },
      {mem_name: 'member 2',
        mem_post: 'postPost',
        ID: '2',
        Url: '../assets/img/team/2.jpg'
      },
      {mem_name: 'member 3',
        mem_post: 'postPost',
        ID: '3',
        Url: '../assets/img/team/3.jpg'
      },
      {mem_name: 'member 4',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      },
      {mem_name: 'member 5',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      },
      {mem_name: 'member 6',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      },
      {mem_name: 'member 7',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      },
      {mem_name: 'member 8',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      },
      {mem_name: 'member 9',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      },
      {mem_name: 'member 10',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      }
    ];

}

}
