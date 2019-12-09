import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
    pages=[
      {
        title:'Create Agreement',
        url:'/create-agr'
      },
      
      {
        title:'View Agreement',
        url:'/view-agr'
      },
      {
        title:'View TR',
        url:'/view-tr'
      },
      {
        title:'View IP',
        url:'/view-ip'
      },
      {
        title:'Create IP',
        url:'/create-ip'
      }
    ]
  constructor( 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
