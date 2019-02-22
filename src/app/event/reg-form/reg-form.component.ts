import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';
import { ApicallService } from '../.././apicall.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  always: number;
  teamMem: number;
  availEntFrom1 : any;
  availEntTo1 : any;
  ID: any;
  Var: Array<number> = [];
  Var1: Array<number> = [];
  allowMem: Array<number> = [];
  allowMem1: Array<number> = [];
    constructor(private api: ApicallService) { }

  ngOnInit() {
    this.ID = this.api.getid();
    console.log(this.api.getid());
    this.always=1;
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

  availableEntries(event: any) {

      if( this.ID ==1)
      {
        this.availEntFrom1 = 6;
        this.availEntTo1 = 6;
        for (let i=this.availEntFrom1; i <= this.availEntTo1; i++) {
          this.allowMem.push(i);
        }
        this.allowMem1 = this.allowMem;
      }

      if( this.ID ==2)
    {
      this.availEntFrom1 = 2;
      this.availEntTo1 = 5;
      for (let i=this.availEntFrom1; i <= this.availEntTo1; i++) {
        this.allowMem.push(i);
      }
      this.allowMem1 = this.allowMem;
    }

    if( this.ID ==3)
    {
      this.availEntFrom1 = 1;
      this.availEntTo1 = 3;
      for (let i=this.availEntFrom1; i <= this.availEntTo1; i++) {
        this.allowMem.push(i);
      }
      this.allowMem1 = this.allowMem;
    }
  }


  infoSub(){
    console.log();
  }

}

