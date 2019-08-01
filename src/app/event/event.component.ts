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
        Event_Name: 'PYTHON Workshop',
        dec: 'The Coding Club,Svit is going to arrange a three days Certified Python Workshop. Workshop fees : 150rs, 70rs will be refunded after workshop. *Terms and Conditions apply.',
        ID: '1',
        Url: `../../assets/img/events/python.png`,
        EventDis: 'Register',
      },
      {
        Event_Name: 'CYCLONE 1.0',
        dec: 'Coding event named CYCLONE 1.0 to enthusiast the coding skills of the students. In this event a coding test was created using platform of HACKEREARTH.',
        ID: '2',
        Url: `../../assets/img/events/cyclone.png`,
        EventDis: 'Done'
      },
      {
        Event_Name: 'GITHUB Workshop',
        dec: 'Seminar on Awareness of GITHUB, through which student can improve the programming skills and share their projects code on forum with IT professionals.',
        ID: '3',
        Url: `../../assets/img/events/github.png`,
        EventDis: 'Done'
      },
    ];
  }
signIn() {      
    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.auth().currentUser == null) {
      console.log('in signin');
      firebase.auth().signInWithPopup(provider).then( function(result){
        alert('Signin successful. Click on register');
        //window.location.reload();
      });
    }
   else{
      this.router.navigate(['/regform']);

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
