import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  public vehicle:any={};
    
  //  activated route for get method
  constructor(private _activedRoute:ActivatedRoute,private _vehicleService:VehicleService){
    this._activedRoute.params.subscribe(
      (data:any)=>{
        
        this._vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }

}
