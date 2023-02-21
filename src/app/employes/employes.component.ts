import { Component } from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent {
  public employes:any=[
    {name:'sai',position:'ui developer',office:'india',age:28,startdate:'2020-8-15',salary:125000},
    {name:'siri',position:'java developer',office:'usa',age:24,startdate:'2018-5-25',salary:100000},
    {name:'naresh',position:'quality analyst',office:'canada',age:27,startdate:'2016-8-18',salary:130000},
    {name:'raju',position:'software engineer',office:'london',age:27,startdate:'2019-6-15',salary:145000},
    {name:'shiva',position:'ux developer',office:'india',age:25,startdate:'2020-5-25',salary:95000},
    {name:'jai',position:'Accountant',office:'india',age:26,startdate:'2021-8-5',salary:105000},


  ];
  public search:string[]=['name','position','office','age','startdate','salary'];

}
