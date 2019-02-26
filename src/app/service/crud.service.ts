import { Injectable } from '@angular/core';
import { SubIndi, SubTeam, Team } from '../service/infoSub';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  AddSRef: AngularFireList<any>;
  AddRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  SaveIndiEntry(info: SubIndi){
    this.AddSRef.push({
      name: info.pName,
      email: info.pEmail,
      phone: info.pPhone
    })
  }


}
