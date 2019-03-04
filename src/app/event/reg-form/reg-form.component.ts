import { Component, OnInit } from '@angular/core';
//'../../../../node_modules/@angular/core';
//import {MODAL_BROWSER_PROVIDERS} from "angular2-modal/platform-browser/index";
import {NgIf} from '../../../../node_modules/@angular/common';
//import { ApicallService } from '../.././apicall.service';
//import { checkBinding } from '@angular/core/src/view/util';
import { SubIndi  } from '../../service/infoSub';
//import { CrudService } from 'src/app/service/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import { EventComponent } from '../event.component';

//import { ApicallService } from '../../apicall.service';
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit{

  db: AngularFirestore;
  teamMem: number;
  ID: any;
  pEmail: string;
  pName: string;
  pPhone: number;
  items: Observable<any[]>;

  ngOnInit() {
   
  }

  constructor(db: AngularFirestore) {
    //super(ApicallService);
    this.db = db;
    this.items = this.db.collection('items').valueChanges();
  }

  teamMembers(event: any){
    this.teamMem = event.target.value;
    console.log(event);
  }

  infoSub01(){
    this.checkIndi();
    console.log();
  }

 /* infoSub02(){
    this.checkTeam(this.getValue('choose'));
    console.log();
  }*/
  checkIndi(){
    const name = this.getValue('pName');
    const email = this.getValue('pEmail');
    const phone = this.getValue('pPhone');
   // const eventId = this.getValue('I.id');
    if (name === '' || email === '' || phone === '') {alert('All fields are mandotory'); } else {
        const obj = {
        name: this.getValue('pName'),
        email: this.getValue('pEmail'),
        phone: this.getValue('pPhone'),
        //eventId: this.eveId
      };
        this.db.collection('items').add(obj);
        console.log('passed');
        //alert('submitted');

    }

  }

  checkTeam(id){
  }


  getValue(id) {
    return (document.getElementById(id) as HTMLInputElement).value;
}
 
  memNo() {
    const no = this.getValue('choose');
    console.log('member : ' + no);
  }
}
