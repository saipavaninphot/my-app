import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public products:any=[];
  public term:string="";

  constructor(private _productService:ProductService){
    _productService.getProducts().subscribe(
      (data:any)=>{
        this.products = data;

      },
      (err:any)=>{
        alert("internal server error");
      }

    )
    
  }
  

 
}
