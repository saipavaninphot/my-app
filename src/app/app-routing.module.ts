import { HttpClientModule } from '@angular/common/http';
import { Component, Directive, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutCeoComponent } from './aboutus/about-ceo/about-ceo.component';
import { AuthenticationGuard } from './authentication.guard';
import { BankingComponent } from './banking/banking.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivetaskComponent } from './directivetask/directivetask.component';
import { EmailComponent } from './email/email.component';
import { EmployesComponent } from './employes/employes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PhoneComponent } from './phone/phone.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentComponent } from './student/student.component';
import { StudentformComponent } from './studentform/studentform.component';
import { UsersComponent } from './users/users.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[],children:[
  {path:'home',component:HomeComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'grade',component:GradeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'directivetask',component:DirectivetaskComponent},
  {path:'employes',component:EmployesComponent},
  {path:'cart',component:CartComponent},
  {path:'student',component:StudentComponent},
  {path:'phone',component:PhoneComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'product',component:ProductComponent},
  {path:'banking',component:BankingComponent},
  {path:'create-vehicle',component:CreateVehicleComponent,canDeactivate:[NotifyGuard]},
  {path:'studentform',component:StudentformComponent},
  {path:'create-student',component:CreateStudentComponent},
  {path:'email',component:EmailComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'create-user',component:CreateUserComponent,canDeactivate:[NotifyGuard]},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  {path:'parent',component:ParentComponent},
  {path:'items',component:ItemsComponent},
  {path:'nav',component:NavComponent},
  {path:'cartlist',component:CartlistComponent},
  {path:'about-ceo',component:AboutCeoComponent},
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)
  },
  {path:'users',component:UsersComponent}

  
  
]},
{path:'',component:DashboardComponent},
{path:'**',component:PagenotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
