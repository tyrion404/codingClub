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

  infoSub01(){
    const config = {
      apiKey: "AIzaSyB30s0J6YXG2vjrpXb2ebxZs07MvMcBwQk",
      authDomain: "codingclub-f3cba.firebaseapp.com",
      databaseURL: "https://codingclub-f3cba.firebaseio.com",
      projectId: "codingclub-f3cba",
      storageBucket: "codingclub-f3cba.appspot.com",
      messagingSenderId: "161009164795"
    };
   // firebase.initializeApp(config);
    //this.checkIndi();
    
    console.log();
  }

 /* infoSub02(){
    this.checkTeam(this.getValue('choose'));
    console.log();
  }*/
 /* checkIndi(){
    const name = this.getValue('pName');
    const email = this.getValue('pEmail');
    const phone = this.getValue('pPhone');
    if(name === '' || email === '' || phone === '') {alert('All fields are mandotory'); }

    else{

    }

  }

  checkTeam(id){
    
  }
*/

  getValue(id) {
    return (document.getElementById(id) as HTMLInputElement).value;
}
}
