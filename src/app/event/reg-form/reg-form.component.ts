import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';
import { ApicallService } from '../.././apicall.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  teamMem: number;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  availEnt : any;
  ID: any;
  Var: Array<number> = [];
  Var1: Array<number> = [];
  allowMem: Array<number> = [];
  allowMem1: Array<number> = [];
    constructor(private api: ApicallService) { }

  ngOnInit() {
    this.ID = this.api.getid();
    console.log(this.api.getid());
  }

  teamMembers(event: any) {
    this.teamMem = event.target.value;
    console.log(this.teamMem);
    for (let i = 0; i < this.teamMem - 1; i++) {
       this.Var.push(i);
    }
    this.Var1 = this.Var;
    this.Var = [];
    console.log(this.Var);
  }

  availableEntriesE1(event: any) {

    this.availEnt = 3;
    console.log(this.availEnt);
    for (let i = 1; i <= this.availEnt; i++) {
      this.allowMem.push(i);
    }
    this.allowMem1 = this.allowMem;
  }

  availableEntriesE2(event: any) {

    this.availEnt = 6;
    console.log(this.availEnt);
    for (let i = 1; i <= this.availEnt; i++) {
      this.allowMem.push(i);
    }
    this.allowMem1 = this.allowMem;
  }

  availableEntriesE3(event: any) {

    this.availEnt = 5;
    console.log(this.availEnt);
    for (let i = 1; i <= this.availEnt; i++) {
      this.allowMem.push(i);
    }
    this.allowMem1 = this.allowMem;
  }

  infoSub(){
    console.log();
  }

}

