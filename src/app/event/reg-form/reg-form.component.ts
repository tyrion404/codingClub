import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

interface User {
  uid: string;
  email: string;
}

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  db: AngularFirestore;
  teamMem: number;
  user: Observable<User>;
  ID: any;
  email: string;
  pEmail: string;
  pName: string;
  pPhone: number;
  items: Observable<any[]>;
  eventid: any;
  ngOnInit() {
    this.signIn();
  }

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    db: AngularFirestore) {
      this.db = db;
      this.items = this.db.collection('items').valueChanges();
      this.eventid = event;
      //// Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
    }
  teamMembers(event: any) {
    this.teamMem = event.target.value;
   /* console.log(this.teamMem);
    const no = this.getValue('choose');*/
    console.log('member : ' + this.teamMem);
  }
    checkTeam() {
   // console.log('start checking');
    const lName = this.getValue('lName');
    const lEmail = this.getValue('lEmail');
    const lPhone = this.getValue('lPhone');
    const memNo = this.teamMem;
    let memberObject = [];
    let leaderObject;
    let memCount = 0;
    //console.log('checking');
    if (lName === '' || lEmail === '' || lPhone === '') {
      alert('All fields are mandotory');
      memberObject = [];
     } else {
      leaderObject = {
        Name: lName,
        Email: lEmail,
        Phone: lPhone
      };
    
      const memberArray = document.getElementsByName('member') ;
      for ( let i = 0; i < memNo * 2; i += 2) {
        const mName = (memberArray[i] as HTMLInputElement).value;
        const mPhone = (memberArray[i + 1] as HTMLInputElement).value;
        if (mName === '' || mPhone === '') {
          alert('All fields are mandotory');
          memberObject = [];
          return; } else {
        console.log(mName);
        console.log(mPhone);
        memberObject[memCount] = {
          Name: mName,
          Phone: mPhone
        };
        memCount++;
         }
      }
      this.db.collection('event' + this.eventid).doc('Entry').collection('leaderInfo').add(leaderObject);
      for (let j = 0; j < this.teamMem; j++ ) {
        this.db.collection('event' + this.eventid).doc('Entry').collection('memberInfo').add(memberObject[j]);
      }
    }
  }


    checkIndi() {
    console.log('start checking');
    const name = this.getValue('pName');
    const email = this.getValue('pEmail');
    const phone = this.getValue('pPhone');
    console.log('checking');
    if (name === '' || email === '' || phone === '') { alert('All fields are mandotory'); } else {
      const obj = {

        name: this.getValue('pName'),
        email: this.getValue('pEmail'),
        phone: this.getValue('pPhone')
      };
      console.log('checking again');
      var check = this.checkExistIndi();
      if(check){
        this.db.collection('event' + this.eventid).doc('Entry').collection('Participant').add(obj);
        /*this.db.collection('individualEntry').add(obj);*/
        alert('submitted');
      } else {
        alert('Already Registered');
      }
    }

  }

  checkExistIndi(){
    let result = true;
    

    return result;
  }

  getValue(id) {
    const val = (document.getElementById(id) as HTMLInputElement).value;
    return val;
  }

  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }


  private updateUserData(user) {
   const data: User = {
      uid: user.uid,
      email: user.email,
    };
   console.log(data.email);
   this.email = data.email;
   return null;
  }


}
