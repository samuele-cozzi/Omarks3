import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireOfflineDatabase, AfoObjectObservable} from 'angularfire2-offline';

import {SettingsModel} from '../models/settingsModel';

@Injectable()
export class FirebaseProvider {
  
  private uid_key: string = 'uid_key';

  private uid: string = '';
  public user: AfoObjectObservable<any> = null;
  private settings: SettingsModel = new SettingsModel();

  constructor(public storage: Storage, public db: AngularFireOfflineDatabase) {
  }

  async init() {
    this.uid = await this.storage.get(this.uid_key);
    this.user = this.db.object('/users/' + this.uid);
    return this.user;
  }

  getUserId(){
    return this.uid;
  }
  
  setUserId(user:any){
    this.storage.set(this.uid_key, user.uid);
  }

  logout(){
    this.storage.remove(this.uid_key);
    this.db.reset();
  }

  getSettings() {
    return this.settings;
  }

  setSettings( data ) {
    this.settings = data;
  }

  saveSettings(model: any) {
    const promise = this.user.set(model.value);
    //const promise = this.db.object('/users/' + this.uid).update(model.value);
    //romise.offline.then(() => console.log('offline data saved to device storage!'));
    promise.then(() => console.log('data saved to Firebase!'));
  }

  // getTasks() {
  //   return this.db.list('/settings/' + this.uid + '/tasks');
  // }

}
