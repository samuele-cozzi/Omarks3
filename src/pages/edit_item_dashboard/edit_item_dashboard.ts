import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AfoObjectObservable } from 'angularfire2-offline';

import { FirebaseProvider } from '../../providers/firebaseProvider';

@IonicPage({
  name: "EditItemDashboard"
})
@Component({
  selector: 'page-edit-item-dashboard',
  templateUrl: 'edit_item_dashboard.html'
})
export class EditItemDashboardPage implements OnInit {
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
    this.user = this.settings.user;
    this.id = this.navParams.get('key');
    if (this.id == null) {
      this.item = new Object();
    } else {
      this.item = JSON.parse(this.navParams.get('value'));
      console.log(this.id);
    }
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

  save() {
    if (this.id == null) {
      this.settings.addDashboardItem(this.item)
        .then(x => this.toastSavedDashboard())
        .catch(err => this.toastError(err));
    } else {
      this.settings.editDashboardItem(this.id, this.item)
        .then(x => this.toastSavedDashboard())
        .catch(err => this.toastError(err));
    }
  }

  delete() {
    this.settings.deleteDashboardItem(this.id)
      .then(x => this.toastSavedDashboard())
      .catch(err => this.toastError(err));
  }
}
