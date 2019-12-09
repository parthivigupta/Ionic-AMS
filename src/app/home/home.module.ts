import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
        children: [
          {
            path: "create-agr",
            loadChildren:"../pages/create-agr/create-agr.module#CreateAgrPageModule"
          },
          {
            path: "view-agr",
            loadChildren: "../pages/view-agr/view-agr.module#ViewAgrPageModule"
          },
          {
            path: "view-tr",
            loadChildren: "../pages/view-tr/view-tr.module#ViewTRPageModule"
          },
          {
            path: "view-ip",
            loadChildren: "../pages/view-ip/view-ip.module#ViewIPPageModule"
          },
          {
            path: "create-ip",
            loadChildren:
              "../pages/create-ip/create-ip.module#CreateIpPageModule"
          }
        ]
      },
      {
        // path: "",
        // redirectTo: "/home",
        // pathMatch: "full"
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
