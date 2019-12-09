import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/servic/global.service';
import { PopoverPage } from '../popover/popover.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-view-ip',
  templateUrl: './view-ip.page.html',
  styleUrls: ['./view-ip.page.scss'],
})
export class ViewIPPage implements OnInit {
  accrualheader : any 
  accrualitem : any
  accrualhdrinfo : any 
  agrnum : any
  agrinfo :any;
  Agrdata:any
  hide_card=true;
  accrualiteminfo : any 
  accrualitemtemp1 : any
  constructor(private global : GlobalService,private pop:PopoverController) {
    this.global.getAgreemnetHeaderall().then(data => {
      this.agrinfo = data ;
      this.Agrdata = this.agrinfo.d.results ;
    });
   
   }

  ngOnInit() {
  }
  getAgr(event){
    let agr = event.detail.value;
    this.global.getAccrualhdr(agr).then(data => {
      this.accrualhdrinfo = data ;
      this.accrualheader = this.accrualhdrinfo.d.results ;
    });
    this.global.getAccrualitem(agr).then(data => {
      this.accrualiteminfo = data ;
      this.accrualitem  = this.accrualiteminfo.d.results ;     
    });;
  }
  
show(ev){
  this.hide_card = false;
}
async openHome(ev: Event) {
  const popover = await this.pop.create({
    component: PopoverPage,
    event: ev,
    translucent: true
  });
  return await popover.present();
}
}
