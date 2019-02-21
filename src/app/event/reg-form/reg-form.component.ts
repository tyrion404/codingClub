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
  ID: any;
  Var: Array<number> = [];
  Var1: Array<number> = [];
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

  infoSub(){
    console.log();
  }

  statusOfEvent() {
    if (this.ID == 1) {
      this.four = 'disabled';
      this.five = 'disabled';
      this.three = 'disabled';
    }
    else if (this.ID == 2) {
      this.one = 'disabled';
      this.two = 'disabled';
      this.three = 'disabled';
    }
    else{
      this.one = 'disabled';
      this.two = 'disabled';
      this.three = 'disabled';
    }
  }

}

