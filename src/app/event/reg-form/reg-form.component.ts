import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';
import { ApicallService } from '../.././apicall.service';
import { checkBinding } from '@angular/core/src/view/util';
import { AngularFireDatabase } from '@angular/fire/database';
import { SubIndi  } from '../../service/infoSub';
import { CrudService } from 'src/app/service/crud.service';



@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent extends CrudService implements OnInit, SubIndi  {

  teamMem: number;
  ID: any;
  pEmail: string;
  pName: string;
  pPhone: number;

  //constructor(private api: ApicallService) { }

  ngOnInit() {
    //this.ID = this.api.getid();
   // console.log(this.api.getid());
  }

  teamMembers(event : any){
    this.teamMem = event.target.value;
    console.log(event);
  }

  infoSub01(){
    //this.
    //SaveIndiEntry(pName, pEmail, pPhone);
    //SubIndi();
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
    if(name === '' || email === '' || phone === '') {alert('All fields are mandotory'); }

    else {
      this.SaveIndiEntry(name, email, phone);
      alert('submitted');

    }

  }

  checkTeam(id){
    
  }


  getValue(id) {
    return (document.getElementById(id) as HTMLInputElement).value;
}
}
