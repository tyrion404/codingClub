import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';
import { ApicallService } from '../.././apicall.service';
import { checkBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  teamMem: number;
  ID: any;
  constructor(private api: ApicallService) { }

  ngOnInit() {
    this.ID = this.api.getid();
    console.log(this.api.getid());
  }

  teamMembers(event : any){
    this.teamMem = event.target.value;
    console.log(event);
  }

  infoSub(){
    this.checkIndi();
    console.log();
  }

  checkIndi(){
    const name = this.getValue('pName');
    if(name === '') {alert('All fields are mandotory'); }

  }

  getValue(id) {
    return (document.getElementById(id) as HTMLInputElement).value;
}
}
