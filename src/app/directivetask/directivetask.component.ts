import { Component } from '@angular/core';

@Component({
  selector: 'app-directivetask',
  templateUrl: './directivetask.component.html',
  styleUrls: ['./directivetask.component.css']
})
export class DirectivetaskComponent {
  public companies:any=[
    {name:'kia',price:5000000,rating:4.3,},
    {name:'bmw',price:12500000},
    

  ];

}
