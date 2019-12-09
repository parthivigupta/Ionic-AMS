import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopoverPage } from '../popover/popover.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-create-ip',
  templateUrl: './create-ip.page.html',
  styleUrls: ['./create-ip.page.scss'],
})
export class CreateIpPage implements OnInit {
i=1;
  constructor(public http : HttpClient,public pop : PopoverController) { }

  ngOnInit() {
  }
cal(ev){
  if (this.i == 1) {
    var url = "http://localhost:8082/rebates.svc/Accrual";
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {resolve(data);
        this.i = this.i + 1;
        alert('Rebates has been calculated!!');
      },
      err => {
          console.log(err);
      })
  })}
  else{
    alert('No Active agreement found for Accrual')
  }
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
