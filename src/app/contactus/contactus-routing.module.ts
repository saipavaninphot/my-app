import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEmailComponent } from './contact-email/contact-email.component';

const routes: Routes = [
  {path:'contact-email',component:ContactEmailComponent},
  {path:'contact-phone',component:ContactEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
