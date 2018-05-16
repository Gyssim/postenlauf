import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'; 
import {AngularFireList} from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable'; 

/*
  Generated class for the PostenServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostenServiceProvider {

  itemsRef: AngularFireList<any>; 
  items: Observable<any[]>; 

  constructor(public afd: AngularFireDatabase) { 
    this.itemsRef = this.afd.list('/Posten/'); 
    this.items = this.itemsRef.snapshotChanges().map(changes => { 
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); 
    }); 
  }

  deleteItem(key) {     
    this.itemsRef.remove(key);  
  } 

  getItems(){ 
    return this.items; 
  }


}
