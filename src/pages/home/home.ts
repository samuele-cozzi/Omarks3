import { Component, ViewChild, HostListener } from '@angular/core';
import { IonicPage, NavController, Searchbar, ToastController } from 'ionic-angular';

//import { SettingsModel } from '../../models/settingsModel';
import { Marks } from '../../models/marks';
import { EditItemPage } from '../edit_item/edit_item';
import { EditItemDashboardPage } from '../edit_item_dashboard/edit_item_dashboard';
import { FirebaseProvider } from '../../providers/firebaseProvider';
import { AfoObjectObservable} from 'angularfire2-offline';
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
  private user: AfoObjectObservable<any> = null;

  private searchFacets: any[] = [];
  private searchItems: any[] = [];

  /* IONIC Lifecycle app */
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private settings: FirebaseProvider,
    private algoliaService: AlgoliaService
  ) {

    
  }

  async ionViewDidLoad() {
    
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
    (event.inputType === "insertText") && (event.target.value !== "") && this.getSearch(event.target.value, 0);
    (event.type === "input") && (event.target.value !== "") && this.getSearch(event.target.value, 0);
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
    console.log("do_infinite");
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
    this.user = this.settings.user;
  }

  async dashboard_up(item) {
    try {
      let id = item._key;
      let prev_id = item._prev;
      let prev_item = await this.settings.getDashboardItem(item._prev);
      item._key = prev_id;
      prev_item.value._key = id;
      this.settings.editDashboardItem(id, prev_item.value);
      this.settings.editDashboardItem(prev_id, item);
    } catch (err) {
      this.toastError(err);
    }
  }

  async dashboard_down(item) {
    try {
      let id = item._key;
      let next_id = item._next;
      let next_item = await this.settings.getDashboardItem(item._next);
      item._key = next_id;
      next_item.value._key = id;
      this.settings.editDashboardItem(id, next_item.value);
      this.settings.editDashboardItem(next_id, item);
    } catch (err) {
      this.toastError(err);
    }
  }

  dashboard_edit (item) {
    this.navCtrl.push(EditItemDashboardPage, {
      value: JSON.stringify(item, null, 2),
      key: item._key
    });
  }

  dashboard_delete(item) {
    this.settings.deleteDashboardItem(item._key)
      .then(x => this.toastSavedDashboard())
      .catch(err => this.toastError(err));
  }

  delete(item) {
    // var i = this.user.dashboard.indexOf(item);
    // if (i > -1) {
    //   this.user.dashboard.splice(i, 1);
    //   this.settings.saveSettings(this.user);
    // }
    // this.algoliaService.delete_item(item)
    //   .then(x => this.toastSavedDashboard())
    //   .catch(err => this.toastError(err));
  }
}
