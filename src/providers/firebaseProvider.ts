import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AngularFireOfflineDatabase} from 'angularfire2-offline';

@Injectable()
export class FirebaseProvider {
  
  private uid_key: string = 'uid_key';
  private user_key: string = 'user_key';

  private uid: string = '';
  private user: any = null;

  constructor(public storage: Storage, public db: AngularFireOfflineDatabase) {
  }

  async getUserId(){
    this.uid = await this.storage.get(this.uid_key);
    return this.uid;
  }

  async getUser(){
    this.user = await this.storage.get(this.user_key);
    return this.user;
  }
  
  setUserId(user:any){
    this.storage.set(this.uid_key, user.uid);
    this.storage.set(this.user_key, user);
  }

  logout(){
    this.storage.remove(this.uid_key);
    this.storage.remove(this.user_key);
  }

  getInfo() {
    return this.db.object('/settings/' + this.uid + '/info');
  }

  getTasks() {
    return this.db.list('/settings/' + this.uid + '/tasks');
  }

}
