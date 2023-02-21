import { HttpClientModule } from '@angular/common/http';
import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { BankingComponent } from './banking/banking.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
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
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhoneComponent } from './phone/phone.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentComponent } from './student/student.component';
import { StudentformComponent } from './studentform/studentform.component';
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
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'studentform',component:StudentformComponent},
  {path:'create-student',component:CreateStudentComponent},
  {path:'email',component:EmailComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent}
  
]},
{path:'',component:DashboardComponent},
{path:'**',component:PagenotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
