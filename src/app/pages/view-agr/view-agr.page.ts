import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/servic/global.service';
import { PopoverPage } from '../popover/popover.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-view-agr',
  templateUrl: './view-agr.page.html',
  styleUrls: ['./view-agr.page.scss'],
})
export class ViewAgrPage implements OnInit {
  vendordata :any;
  selven : any;
  Agrdata : any;
  hide_card= true;
  agrnum : any;
agritem:any;
 agrstore:any;
 agrtier:any;
  constructor(private global: GlobalService,private pop: PopoverController) { }

  ngOnInit() {
    this.global.getVendor().then(data => {
      this.setVendor(data);      
  });;
 
  }
  setitem(data){
    this.agritem = data.d.results;
 }
 setstore(data){
   this.agrstore = data.d.results;
 }
 settier(data){
   this.agrtier = data.d.results;
 }
  setVendor(data){
    this.vendordata = data.d.results;
  }
  SetSelectedVendor(event){
    this.selven = event.detail.value;
    this.global.getAgreemnetHeader(this.selven).then(data => {
      this.setagr(data);      
    });;
  }
  showdetail(){
    this.hide_card = false;
    this.global.getAgrItem(this.agrnum).then(data => {
      this.setitem(data);  
    });
    this.global.getAgrstore(this.agrnum).then(data => {
      this.setstore(data);  
    });
    this.global.getAgrtier(this.agrnum).then(data => {
      this.settier(data);  
    });
  }
  setagr(data){
   this.Agrdata = data.d.results;
  }
  getAgr(ev,data){
    
   this.agrnum = ev.detail.value;
  
  //  this.router.navigate(['agr-detail/'+agrnum])
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
