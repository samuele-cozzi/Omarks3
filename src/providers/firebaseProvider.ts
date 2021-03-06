import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireOfflineDatabase, AfoObjectObservable } from 'angularfire2-offline';

import { SettingsModel } from '../models/settingsModel';

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
    if (this.uid != null) {
      this.user = this.db.object('/users/' + this.uid);
      return this.user;
    }
  }

  getUserId() {
    return this.uid;
  }

  setUserId(user: any) {
    this.storage.set(this.uid_key, user.uid);
  }

  logout() {
    this.storage.remove(this.uid_key);
    this.db.reset();
  }

  getSettings() {
    return this.settings;
  }

  setSettings(data) {
    this.settings = data;
  }

  saveSettings(model: any) {
    //const promise = this.user.set(model.value);
    const promise = this.db.object('/users/' + this.uid).update(model);
    return promise;
  }

  async getDashboardItem(id: number) {
    const model = await this.db.object('/users/' + this.uid + '/dashboard/' + id);
    return model;
  }

  addDashboardItem(model: any) {
    const promise = this.db.list('/users/' + this.uid + '/dashboard').push(model);
    return promise;
  }

  editDashboardItem(id: number, model: any) {
    const promise = this.db.object('/users/' + this.uid + '/dashboard/' + id).set(model);
    return promise;
  }

  deleteDashboardItem(id: number) {
    const promise = this.db.object('/users/' + this.uid + '/dashboard/' + id).remove();
    return promise;
  }

  // getTasks() {
  //   return this.db.list('/settings/' + this.uid + '/tasks');
  // }

}
