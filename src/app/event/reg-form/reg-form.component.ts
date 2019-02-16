import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  teamMem: number;
  constructor() { }

  ngOnInit() {
  }

  teamMembers(event : any){
    this.teamMem = event.target.value;
    console.log(event);
  }

  infosub(event: any){
    console.log("hey");
  }

}
