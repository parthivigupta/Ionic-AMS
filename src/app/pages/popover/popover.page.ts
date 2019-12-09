import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  pages : any;
  selectedPath='';
  constructor(private route: Router, private pop: PopoverController) { 
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
    
  }

  ngOnInit() {
  }
close(){
  this.pop.dismiss();
}
}
