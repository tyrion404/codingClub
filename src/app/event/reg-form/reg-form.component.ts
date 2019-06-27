import {NgIf} from '@angular/common';
import { ApicallService } from '../.././apicall.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, isEmpty } from 'rxjs/operators';
import * as firebase from 'firebase';
//import { userInfo } from 'os';
import { renderComponent } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { ɵAnimationGroupPlayer } from '@angular/animations';


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
  

  public useravail;

  ngOnInit() { }

  constructor(   
    private router: Router ,
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
    let teamObject;
    let memCount = 0;
    let issuccess = false;
    if (lName === null || lEmail === null || lPhone === null) {
      alert('All fields1 are mandotory');
      memberObject = [];
      return;
     } else {
      const memberArray = document.getElementsByName('member') ;
      for ( let i = 0; i < memNo * 2; i += 2) {
        const mName = (memberArray[i] as HTMLInputElement).value;
        const mPhone = (memberArray[i + 1] as HTMLInputElement).value;
        if (mName === '' || mPhone === '') {
          alert('All fields  are mandotory');
          memberObject = [];
          return; } else {
        memberObject[memCount] = {
          Name: mName,
          Phone: mPhone
        };
        memCount++;
        }
      }
      teamObject = {
        LeaderName: lName,
        LeaderEmail: lEmail,
        LeaderPhone: lPhone,
        Member: memberObject
      };

      this.db.collection('event' + this.eventid).doc('Team').collection('TeamInfo').add(teamObject);
      alert('submited successful');
      document.getElementById('submit').style.display = 'none';
      this.router.navigate(['']);
    }
  }

    checkIndi() {
    console.log('start checking');
    const name = this.getValue('pName');
    const email = this.getValue('pEmail');
    const phone = this.getValue('pPhone');
    if (name === '' || email === '' || phone === '') { alert('All fields are mandotory'); } else {
      const obj = {
        name: this.getValue('pName'),
        email: this.getValue('pEmail'),
        phone: this.getValue('pPhone')
      };
      console.log('checking again');
      const check = this.checkExistIndi();
      if(check){
        this.db.collection('event' + this.eventid).doc('Individual').collection('Participants').add(obj);
        /*this.db.collection('individualEntry').add(obj);*/
        alert('submitted successfully');
        document.getElementById('submit2').style.display = 'none';
        this.router.navigate(['']);
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

  signout(){
    firebase.auth().signOut().then(function() {
      document.getElementById('signout').style.display = 'none';
    });
    this.router.navigate(['']);
    alert('signout successfull');
  }


  }

