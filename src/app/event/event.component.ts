import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  v: any;

  constructor() { }

  ngOnInit() {

    this.v = [
      {Event_Name: 'Event Name 1',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '1'
      },
      {Event_Name: 'Event Name 1',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '2'
      },
      {Event_Name: 'Event Name 1',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '3'
      }
    ];

  }

  public register(ID){

    console.log(ID);
  }

}
