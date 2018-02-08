import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AngularFireOfflineDatabase, AfoObjectObservable} from 'angularfire2-offline';

@Injectable()
export class FirebaseProvider {
  
  private uid_key: string = 'uid_key';

  private uid: string = '';
  private user: AfoObjectObservable<any> = null;

  constructor(public storage: Storage, public db: AngularFireOfflineDatabase) {
  }

  async getUserId(){
    this.uid = await this.storage.get(this.uid_key);
    return this.uid;
  }
  
  setUserId(user:any){
    this.storage.set(this.uid_key, user.uid);
  }

  logout(){
    this.storage.remove(this.uid_key);
    this.db.reset();
  }

  async getSettings() {
    if(this.uid == ''){
      this.uid = await this.storage.get(this.uid_key);
    }
    this.user = this.db.object('/users/' + this.uid);
    
    return this.user;
  }

  saveSettings(model: any) {
    this.user.set(model);
  }

  getTasks() {
    return this.db.list('/settings/' + this.uid + '/tasks');
  }

}
