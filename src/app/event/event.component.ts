import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
// import { userInfo } from 'firebase/';




@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  v: any;
  event: any;
  email: string;
  // user: User;
  // public afAuth: AngularFireAuth;
  constructor(private api: ApicallService) { }

// constructor arg :  private api: ApicallService

  ngOnInit() {
    this.v = [
      {
        Event_Name: 'Event Name 1',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '1',
        Url: `../../assets/img/blog/img1.jpg`

      },
      {
        Event_Name: 'Event Name 2',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '2',
        Url: `../../assets/img/blog/img2.jpg`
      },
      {
        Event_Name: 'Event Name 3',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '3',
        Url: `../../assets/img/blog/img3.jpg`
      }
    ];

  }

  public register(ID) {
     event = ID;
     console.log('event : ' + ID);
     this.api.setid(ID);
  }

}
/*export class EventID extends EventComponent {
 // public  eventid = event;
  public returnId(){
    return event;
  }
}*/
