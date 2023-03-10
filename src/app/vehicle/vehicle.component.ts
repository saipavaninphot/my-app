import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicles:Vehicle[]=[];
  public term:string="";
  public column:string="";
  public order:string="";
  public Page:any=[];
  public Limit:any=[];
  
  // router for set method for view

  constructor(private _vehicleService:VehicleService,private _router:Router){
    _vehicleService.getVehicles().subscribe(
      (data:Vehicle[])=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  pagination(){
    this._vehicleService.getPageVehicles(this.Page,this.Limit).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  delete(id:string){

    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("vehicle deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }
  view(id:string){

    this._router.navigateByUrl("/dashboard/vehicle-details/"+id);

  }

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id);

  }
  }


  


