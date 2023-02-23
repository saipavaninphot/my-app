import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutAddressComponent } from './about-address/about-address.component';
import { AboutDirectorComponent } from './about-director/about-director.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutAddressComponent,
    AboutDirectorComponent
  ],

  imports: [
    CommonModule
  ],
  
  exports:[
    AboutCeoComponent
  ]
})
export class AboutusModule { }
