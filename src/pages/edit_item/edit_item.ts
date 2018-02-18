import {Component, OnInit} from '@angular/core';
import {NavParams, ToastController} from 'ionic-angular';

import {AlgoliaService} from '../../providers/algolia';

//import { SettingsModel } from '../../models/settingsModel';
import { FirebaseProvider } from '../../providers/firebaseProvider';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit_item.html'
})
export class EditItemPage implements OnInit{
  item: any; 
  message: string = "";

  //private user: SettingsModel = new SettingsModel();

  constructor(private navParams: NavParams
    , private toastCtrl: ToastController
    , private searchServices: AlgoliaService
    , private settingsProvider: FirebaseProvider
  ) {

      
    }

  async ngOnInit() {
    //this.user = await this.settingsProvider.getSettings();
    this.item = JSON.parse(this.navParams.get('item'));
  }

  save(){
    if (this.item.image == null && this.item.image_src != '')
    {
      this.item.has_image = 1;
      this.item.image = {
        src: this.item.image_src
      }
    }
    this.item['facets.tag'] = this.item.tags.split(',');

    this.item.time_read = Number.parseFloat(this.item.time_read);
    //this.user.dashboard = [];
    //this.settingsProvider.saveSettings(this.user);

    this.searchServices.save_item(this.item)
        .then(x => {
          let toast = this.toastCtrl.create({
            message: 'Saved!',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        })
        .catch(err => {
          let toast = this.toastCtrl.create({
            message: 'Error: ' + err,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
  }

  star(){
    this.item.favorite = 1;
    this.searchServices.save_item(this.item)
        .then(x => {
          let toast = this.toastCtrl.create({
            message: 'Saved!',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        })
        .catch(err => {
          let toast = this.toastCtrl.create({
            message: 'Error: ' + err,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
  }

  delete(){
    this.searchServices.delete_item(this.item)
        .then(x => {
          let toast = this.toastCtrl.create({
            message: 'Saved!',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        })
        .catch(err => {
          let toast = this.toastCtrl.create({
            message: 'Error: ' + err,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
  }
}
