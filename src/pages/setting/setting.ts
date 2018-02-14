import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';

import { SettingsModel } from '../../models/settingsModel';
import { FirebaseProvider } from '../../providers/firebaseProvider';

@IonicPage({
  name: "Settings"
})
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  settings: SettingsModel = new SettingsModel();
  errors: string = '';

  constructor(private toastCtrl: ToastController
    , private settingsProvider: FirebaseProvider) {


  }

  async ionViewDidLoad() {
    this.settings = this.settingsProvider.getSettings();
    this.settings.menu_string = JSON.stringify(this.settings.menu);
    this.settings.dashboard_string = JSON.stringify(this.settings.dashboard);
  }

  save(event) {
    this.settings.menu = JSON.parse(this.settings.menu_string);
    this.settings.dashboard = JSON.parse(this.settings.dashboard_string);
    this.settingsProvider.saveSettings(this.settings)
    let toast = this.toastCtrl.create({
      message: 'Saved!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  refresh(event) {
    window.location.reload();
  }

}
