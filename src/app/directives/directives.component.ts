import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public today:any=new Date();

  public user:any={name:'abc',age:30};

  public names:string[] = ['abc','john','smith'];

  public states:string[] = ['Telangana','A,P','Himachalpradesh'];

  public users:any =[
    {name:'abc',age:20},
    {name:'def',age:30}
  ];
   public students:any =[
    {name:'sai',sub:'Telugu',marks:80},
  {name:'siri',sub:'Hindi',marks:30},
  {name:'sathya',sub:'English',marks:100}
  ]

  public products:any =[
    {name:'pen',price:10,rating:4},
    {name:'pencil',price:20,rating:3.5},
     
    {name:'Eraser',price:5,rating:4.4},
    {name:'sharpner',price:8,rating:3.6},
  ]

  public time:number =0;

}
