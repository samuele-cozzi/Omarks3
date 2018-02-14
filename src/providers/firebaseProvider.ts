import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireOfflineDatabase, AfoObjectObservable} from 'angularfire2-offline';

import {SettingsModel} from '../models/settingsModel';

@Injectable()
export class FirebaseProvider {
  
  private uid_key: string = 'uid_key';

  private uid: string = '';
  private user: AfoObjectObservable<any> = null;
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
    //this.user.set(model);
  }

  // getTasks() {
  //   return this.db.list('/settings/' + this.uid + '/tasks');
  // }

}
