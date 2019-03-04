import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from  'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
//import { userInfo } from 'firebase/';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  v: any;
  user: User;
  //public afAuth: AngularFireAuth;
  
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private api: ApicallService) { }
  

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
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.user.uid}`);
    console.log(this.user.email);
    //return this.oAuthLogin(provider);

  //  this.newLogin(this.user);
  }
  /*public newLogin(user){
    if(user) this.user=user;
    else{
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
      this.user=user;
      console.log(user.email);
    }
  }
*/
}
