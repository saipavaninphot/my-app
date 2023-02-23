import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent {
// variable
  public cartcount:number=0;
  constructor(private _commonService:CommonService){
    _commonService.getValue().subscribe(
    
    // (variable name taken, at data:)
      (data:any)=>{
        this.cartcount=data;
      }

    )
  }

}
