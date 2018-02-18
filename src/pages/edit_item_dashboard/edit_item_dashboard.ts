import {Component, OnInit} from '@angular/core';
import {NavParams, ToastController} from 'ionic-angular';
import { AfoObjectObservable} from 'angularfire2-offline';

import { FirebaseProvider } from '../../providers/firebaseProvider';

@Component({
  selector: 'page-edit-item-dashboard',
  templateUrl: 'edit_item_dashboard.html'
})
export class EditItemDashboardPage implements OnInit{
  item: any; 
  message: string = "";
  id: number = 0;

  private user: AfoObjectObservable<any> = null;

  constructor(private navParams: NavParams
    , private toastCtrl: ToastController
    , private settings: FirebaseProvider
  ) {

      
    }

  async ngOnInit() {
    this.item = JSON.parse(this.navParams.get('item'));
    this.user = this.settings.user;
    this.id = this.navParams.get('id');
    console.log(this.id);
  }

  /* Toast functions */
  toastError(err) {
    let toast = this.toastCtrl.create({
      message: 'Error: ' + err,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  toastSavedDashboard() {
    let toast = this.toastCtrl.create({
      message: 'Saved!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  save(){
    this.settings.editDashboardItem(this.id, this.item)
      .then(x => this.toastSavedDashboard())
      .catch(err => this.toastError(err));
  }

  delete(){
    this.settings.deleteDashboardItem(this.id)
      .then(x => this.toastSavedDashboard())
      .catch(err => this.toastError(err));
  }
}
