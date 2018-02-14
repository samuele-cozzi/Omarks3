import { Component, ViewChild, HostListener } from '@angular/core';
import { IonicPage, NavController, Searchbar, ToastController, NavParams } from 'ionic-angular';

import { SettingsModel } from '../../models/settingsModel';
import { Marks } from '../../models/marks';
import { EditItemPage } from '../edit_item/edit_item';
import { FirebaseProvider } from '../../providers/firebaseProvider';
import { AlgoliaService } from '../../providers/algolia';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
@IonicPage({
  name: "Home"
})

export class HomePage {
  @ViewChild('searchBar') searchBar: Searchbar;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.key == 'Backspace' && event.isTrusted && event.ctrlKey) {
      this.toDashboard();
    }
    if (event.key == 'Enter' && event.isTrusted && event.ctrlKey) {
      this.toogleSearchBar();
    }
    if (event.key == 'Enter' && event.isTrusted && !event.ctrlKey) {
      if (this.searchItems.length > 0) {
        this.open(this.searchItems[0], null);
      }
    }
  }

  private showSearch: boolean = false;
  private page: number = 0;
  private query: string = "";
  private key: string = "";
  private value: string = "";
  private user: SettingsModel = new SettingsModel();

  private searchFacets: any[] = [];
  private searchItems: any[] = [];

  /* IONIC Lifecycle app */
  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    private settings: FirebaseProvider,
    private algoliaService: AlgoliaService
  ) {

    
  }

  async ionViewDidLoad() {
    // this.user = await this.settings.getSettings();
    // if (typeof this.user.dashboard == 'undefined') {
    //   this.user.dashboard = [];
    // }

    // this.key = this.navParams.get('key');
    // this.value = this.navParams.get('value');

    // if (this.key !== undefined && this.value !== undefined) {
    //   this.getSearchFacets(this.key, this.value);
    //   this.showSearch = true;
    // } else {
    //   this.initDashboard();
    // }
  }

  ionViewWillEnter() {
    this.initDashboard();
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

  /* Header events */
  onInputSearch(event) {
    console.log(event);
    (event.inputType === "insertText") && (event.target.value !== "") && this.getSearch(event.target.value, 0);
    (event.inputType === "deleteContentBackward") && (event.target.value === "") && (this.searchItems = []);
  }

  onCancelSearch(event) {
    console.log(event);
    this.showSearch = false;
    this.searchItems = [];
  }

  onClearSearch(event) {
    console.log(event);
    this.searchItems = [];
  }

  toogleSearchBar() {
    this.showSearch = !this.showSearch;
    (this.showSearch) && this.getFacets();
    if (this.showSearch) {
      setTimeout(() => { this.searchBar.setFocus(); });
    }
  }

  private toDashboard() {
    this.showSearch = false;
  }

  /* Navigation method */
  open(item, event) {
    typeof item.time_read == "string" && (item.time_read = 0);
    item.time_read++;
    this.algoliaService.save_item(item);
    window.open(item.given_url)
  }

  create(item) {
    this.navCtrl.push(EditItemPage, {
      item: JSON.stringify(new Marks(), null, 2)
    });
  }

  edit(item) {
    this.navCtrl.push(EditItemPage, {
      item: JSON.stringify(item, null, 2)
    });
  }

  /* Read Data */
  private initParams() {
    this.searchItems = [];
    this.page = 0;
  }

  async getFacets() {
    this.algoliaService.get_facets().then(items => {
      this.searchItems = [];
      this.searchFacets = items;
    });
  }

  async getSearch(query, page) {
    (this.query != query) && (this.initParams());
    this.query = query;
    var items = await this.algoliaService.get_query(query, 20, page).then();
    for (var i = 0; i < items.length; i++) {
      this.searchItems.push(items[i]);
    }
    return items.length;
  }

  async getSearchFacets(key, value) {
    (this.key != key || this.value != value) && (this.initParams());
    this.key = key;
    this.value = value;
    var items = await this.algoliaService.get_filtered_facets(key, value, 20, this.page).then();
    for (var i = 0; i < items.length; i++) {
      this.searchItems.push(items[i]);
    }
    return items.length;
  }

  async doInfinite(infiniteScroll) {
    if (this.searchItems.length > 0) {
      this.page++;
      var newItemsLength = 0;
      console.log('Begin async operation: ' + this.page);
      if (this.query.trim() != '') {
        newItemsLength = await this.getSearch(this.query, this.page);
        (newItemsLength == 0) && infiniteScroll.enable(false);
        infiniteScroll.complete();
      }
      else if (this.key != "" && this.value != "") {
        newItemsLength = await this.getSearchFacets(this.key, this.value);
        (newItemsLength == 0) && infiniteScroll.enable(false);
        infiniteScroll.complete();
      }
    }
    else {
      infiniteScroll.complete();
    }
  }

  /* Save Data */
  async initDashboard() {
    if (this.user.dashboard.length == 0) {
      var items = await this.algoliaService.get_dashboard();
      items.sort(function(a,b) {return (a.dashboard_ranking > b.dashboard_ranking) ? 1 : ((b.dashboard_ranking > a.dashboard_ranking) ? -1 : 0);} );
      for (var i = 0; i < items.length; i++) {
        delete items[i]['facets.tag'];
        items[i].dashboard_ranking = i;
        this.algoliaService.save_item(items[i]);
      }
      this.user.dashboard = items;
      this.settings.saveSettings(this.user);
    }
  }

  async up(item) {
    try {
      var i = this.user.dashboard.findIndex(x => x.dashboard_ranking == item.dashboard_ranking);
      var j = this.user.dashboard.findIndex(x => x.dashboard_ranking == item.dashboard_ranking - 1);
      this.user.dashboard[j].dashboard_ranking = item.dashboard_ranking;
      this.user.dashboard[i].dashboard_ranking = item.dashboard_ranking - 1;
      await this.algoliaService.save_item(this.user.dashboard[i]);
      await this.algoliaService.save_item(this.user.dashboard[j]);
      this.settings.saveSettings(this.user);
      this.toastSavedDashboard();
    } catch (err) {
      this.toastError(err);
    }
  }

  async down(item) {
    try {
      var i = this.user.dashboard.findIndex(x => x.dashboard_ranking == item.dashboard_ranking);
      var j = this.user.dashboard.findIndex(x => x.dashboard_ranking == item.dashboard_ranking + 1);
      this.user.dashboard[j].dashboard_ranking = item.dashboard_ranking;
      this.user.dashboard[i].dashboard_ranking = item.dashboard_ranking + 1;
      await this.algoliaService.save_item(this.user.dashboard[i]);
      await this.algoliaService.save_item(this.user.dashboard[j]);
      this.settings.saveSettings(this.user);
      this.toastSavedDashboard();
    } catch (err) {
      this.toastError(err);
    }
  }

  add_star(item) {
    var i = this.user.dashboard.indexOf(item);
    if (i > -1) {
      this.user.dashboard[i].favorite = 1;
      this.settings.saveSettings(this.user);
    }
    item.favorite = 1;
    this.algoliaService.save_item(item)
      .then(x => this.toastSavedDashboard())
      .catch(err => this.toastError(err));
  }

  remove_star(item) {
    var i = this.user.dashboard.indexOf(item);
    if (i > -1) {
      this.user.dashboard[i].favorite = 0;
      this.settings.saveSettings(this.user);
    }
    item.favorite = 0;
    this.algoliaService.save_item(item)
      .then(x => this.toastSavedDashboard())
      .catch(err => this.toastError(err));
  }

  delete(item) {
    var i = this.user.dashboard.indexOf(item);
    if (i > -1) {
      this.user.dashboard.splice(i, 1);
      this.settings.saveSettings(this.user);
    }
    this.algoliaService.delete_item(item)
      .then(x => this.toastSavedDashboard())
      .catch(err => this.toastError(err));
  }
}
