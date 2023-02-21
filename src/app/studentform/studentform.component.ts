  import { Component } from "@angular/core";
  import { StudentformService } from "../studentform.service";

  @Component({
    selector:'app-student',
    templateUrl:'./studentform.component.html',
    styleUrls:['./studentform.component.css']
  })
  export class StudentformComponent{

  
  public studentforms:any=[];
  public term:any=[];
  public column:string="";
  public order:string="";
  public page:any=[];
  public limit:any=[];

  constructor(private _studentformService:StudentformService){
    _studentformService.getStudentform().subscribe(
      (data:any)=>{
        this.studentforms=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  filter(){
    this._studentformService.getFilteredStudentforms(this.term).subscribe(
      (data:any)=>{
        this.studentforms=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

sort(){
    this._studentformService.getSortedStudentforms(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentforms=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  pagination(){
    this._studentformService.getPagedStudents(this.page,this.limit).subscribe(
      (data:any)=>{
        this.studentforms=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  delete(id:string){

    this._studentformService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("student deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }


}
