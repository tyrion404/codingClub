import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {


  constructor() { }

  v: any;

  public setid(ID){
    this.v = ID;
  }

  public getid() {
    return this.v;
  }

}
