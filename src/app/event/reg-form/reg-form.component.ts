import { Component, OnInit } from '@angular/core';
// '../../../../node_modules/@angular/core';
// import {MODAL_BROWSER_PROVIDERS} from "angular2-modal/platform-browser/index";
import { NgIf } from '../../../../node_modules/@angular/common';
import { EventComponent} from '../../event/event.component';
// import { ApicallService } from '../.././apicall.service';
// import { checkBinding } from '@angular/core/src/view/util';
// import { CrudService } from 'src/app/service/crud.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/apicall.service';
import { switchMap } from 'rxjs/operators';
// import { User } from 'firebase';
import * as firebase from 'firebase';
// import { EventComponent } from '../event.component';

// import { ApicallService } from '../../apicall.service';

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

  ngOnInit() {
    this.signIn();
  }

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    db: AngularFirestore,
    private api: ApicallService) {
      this.db = db;
      this.items = this.db.collection('individualEntry').valueChanges();

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
    console.log(this.teamMem);
    const no = this.getValue('choose');
    console.log('member : ' + no);
  }

 /* infoSub01() {
    this.checkIndi();
   // console.log();
  }*/
  checkIndi() {
    console.log('start checking');
    const name = (document.getElementById('pName') as HTMLInputElement).value; // this.getValue('pName');
    const email = (document.getElementById('pEmail') as HTMLInputElement).value; // this.getValue('pEmail');
    const phone = (document.getElementById('pphone') as HTMLInputElement).value; // this.getValue('pPhone');
// tslint:disable-next-line: new-parens
    const event = (new EventComponent).event;
    // const eventId = this.getValue('I.id');
    console.log('checking');
    if (name == null || email == null || phone == null) { alert('All fields are mandotory'); } else {
      const obj = {

        name: this.getValue('pName'),
        email: this.getValue('pEmail'),
        phone: this.getValue('pPhone'),
        eventId: event
        // eventId: this.eveId
      };
      this.db.collection('individualEntry').add(obj);
      alert('submitted');
    }

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
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
    };
    console.log(data.email);
    this.email = data.email;
    return null;
  }


}
