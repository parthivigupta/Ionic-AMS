import { Component, OnInit } from '@angular/core';
// import { type } from 'os';
import { GlobalService } from 'src/app/servic/global.service';
import { PopoverPage } from '../popover/popover.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-view-tr',
  templateUrl: './view-tr.page.html',
  styleUrls: ['./view-tr.page.scss'],
})
export class ViewTRPage implements OnInit {
  VendorData: any;
  trheader : any;
  selven:any;
  hide_card=true;
  hide_item= true;
  tritem:any;
  constructor(private global : GlobalService,private pop:PopoverController) { }

  ngOnInit() {
    this.global.getVendor().then(data => {
      // this.VendorData = data;   
      this.setVendor(data);      
  });;
  }
  customPopoverOptions: any = {
    header: 'TR Type',
    // subHeader: 'Select your hair color',
    // message: 'Only select your dominant hair color',
    // type: "popover"
  };
  SetSelectedVendor(event){
      this.selven = event.detail.value;
  }
  showdetail(ev){
    this.hide_card = false;
    this.global.getTRheader(this.selven).then(data => {
      this.settrheader(data);
    });
  }
  setVendor(data){
   this.VendorData = data.d.results;
   }
   settrheader(data){
    this.trheader = data.d.results;
   }
   gettrheader(event,tr){
     this.hide_item=false;
      let trnum = tr.Trid ;
      this.global.getTRitem(trnum).then(data => {
        this.settritem(data);
      });
    }
    settritem(data){
      this.tritem = data.d.results;
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
