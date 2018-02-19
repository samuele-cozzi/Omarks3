import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebaseProvider';
import { MenuSettings } from '../models/menuSettings';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;
  pages: Array<MenuSettings>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public fb: FirebaseProvider) {
    this.initializeApp();
  }

  initializeApp() {

    this.fb.init().then((user) => {
      if (user !== undefined) {
        user.subscribe(data => {
          this.fb.setSettings(data);
          this.pages = data.menu;
        });
      }
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.initializeRootPage();
      });
    });
  }

  async initializeRootPage() {
    var uid = this.fb.getUserId();
    if (uid === null) {
      this.rootPage = LoginPage;
    } else {
      this.rootPage = HomePage;
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component, {
      key: page.key,
      value: page.value
    });
  }

  logOut() {
    this.fb.logout();
    this.nav.setRoot(LoginPage);
  }
}
