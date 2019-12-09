import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { IonicStepperModule } from 'ionic-stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverPageModule } from './pages/popover/popover.module';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  // { path: 'view-agr', loadChildren: './pages/view-agr/view-agr.module#ViewAgrPageModule' },
  // { path: 'view-tr', loadChildren: './pages/view-tr/view-tr.module#ViewTRPageModule' },
  // { path: 'view-ip', loadChildren: './pages/view-ip/view-ip.module#ViewIPPageModule' },
  // { path: 'create-ip', loadChildren: './pages/create-ip/create-ip.module#CreateIpPageModule' },
  // { path: 'create-agr', loadChildren: './pages/create-agr/create-agr.module#CreateAgrPageModule' },
];

@NgModule({
  declarations:[
  ],
  imports: [
    // NativeStorage,
    // IonicStepperModule,
    PopoverPageModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  entryComponents:[
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
