import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 pages : any;
  selectedPath='';
  constructor(private route: Router, private menu : MenuController) {
    this.pages =[];
    
  }
  openFirst() {
    this.pages=[
      {
         title:'Create Agreement',
         url:'/home/create-agr',
         icon:'create'
      },
      {
        title:'Search Agreement',
        url:'/home/view-agr',
        icon:'search'
      },
      {
        title:'Display Transaction',
        url:'/home/view-tr',
        icon:'eye'
      },
      {
        title:'Display IP',
        url:'/home/view-ip',
        icon:'eye'
      },
      {
        title:'Calculate Rebate',
        url:'/home/create-ip',
        icon:'add-circle'
      }
    ]
    this.route.events.subscribe((event: RouterEvent)=>{
      this.selectedPath = event.url;
    })
    ////////////////////////
  }
}
