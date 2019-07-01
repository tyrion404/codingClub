import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
//import { userInfo } from 'os'
//import { userInfo } from 'firebase/';




@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  
  v: any;
  event: any;
  email: string;
  public useravail;
  

  // user: User;
  // public afAuth: AngularFireAuth;
  constructor(private api: ApicallService ,
              private router: Router ,
               ) { }

// constructor arg :  private api: ApicallService

  ngOnInit() {
    this.useravail = firebase.auth().currentUser;
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
signIn() {      
    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.auth().currentUser == null) {
      console.log('in signin');
      firebase.auth().signInWithPopup(provider).then( function(result){
      //window.location.href = "/regform";
        window.location.reload();
      });
    }
   else{
      this.router.navigate(['/regform']);

    }
    if (firebase.auth().currentUser == null) { this.router.navigate(['']); } else {      
    }
  }


  public register(ID) {
    console.log(ID);
    this.api.setid(ID);
// tslint:disable-next-line: deprecation
    event = ID;
    console.log('event : ' + ID);
    this.api.setid(ID);
  }
}
