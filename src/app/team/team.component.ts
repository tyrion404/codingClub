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
      {mem_name: 'Nikunj Prajapati',
        mem_post: 'https://github.com/nikunjleo',
        ID: '1',
        Url: '../assets/img/team/1.jpg'
      },
      {mem_name: 'Bhargav Patel',
        mem_post: 'https://github.com/bhargavpatel',
        ID: '2',
        Url: '../assets/img/team/2.jpg'
      },
      {mem_name: 'Raj Shailendra',
        mem_post: 'https://github.com/Shailu10',
        ID: '3',
        Url: '../assets/img/team/3.jpg'
      },
      {mem_name: 'Yash Shah',
        mem_post: 'https://github.com/yash539',
        ID: '4',
        Url: '../assets/img/team/4.jpg'
      },
      {mem_name: 'Snehil Patel',
        mem_post: 'github.com/highman09',
        ID: '5',
        Url: '../assets/img/team/5.jpg'
      },
      {mem_name: 'Chintan Prajapati',
        mem_post: 'https://github.com/tyrion404',
        ID: '6',
        Url: '../assets/img/team/6.jpg'
      },
      {mem_name: 'member 7',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/7.jpg'
      },
      {mem_name: 'member 8',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/8.jpg'
      },
      {mem_name: 'member 9',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/9.jpg'
      },
      {mem_name: 'member 10',
        mem_post: 'postPost',
        ID: '4',
        Url: '../assets/img/team/10.jpg'
      }
    ];

}

}
