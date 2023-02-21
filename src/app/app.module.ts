
import { NgModule } from '@angular/core';;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { GradeComponent } from './grade/grade.component';
import { RegistrationComponent } from './registration/registration.component';
import { DirectivetaskComponent } from './directivetask/directivetask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployesComponent } from './employes/employes.component';
import { CartComponent } from './cart/cart.component';
import { StudentComponent } from './student/student.component';
import { PhoneComponent } from './phone/phone.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { BankingComponent } from './banking/banking.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentformComponent } from './studentform/studentform.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EmailComponent } from './email/email.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    GradeComponent,
    RegistrationComponent,
    DirectivetaskComponent,
    PagenotfoundComponent,
    EmployesComponent,
    CartComponent,
    StudentComponent,
    PhoneComponent,
    VehicleComponent,
    ProductComponent,
    BankingComponent,
    CreateVehicleComponent,
    StudentformComponent,
    CreateStudentComponent,
    EmailComponent,
    GalleryComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 