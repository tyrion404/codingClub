import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  v: any;
  public afAuth: AngularFireAuth;
  constructor(private api: ApicallService) { }
  

  ngOnInit() {

    this.v = [
      {Event_Name: 'Event Name 1',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '1',
        Url: `../../assets/img/blog/img1.jpg`

      },
      {Event_Name: 'Event Name 2',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '2',
        Url: `../../assets/img/blog/img2.jpg`
      },
      {Event_Name: 'Event Name 3',
        dec: 'Quam adipiscing vitae proin Nec feugiat nisl pretium',
        ID: '3',
        Url: `../../assets/img/blog/img3.jpg`
      }
    ];

  }

  public register(ID){
    console.log(ID);
    this.api.setid(ID);
  }

  public signIn(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }

}
