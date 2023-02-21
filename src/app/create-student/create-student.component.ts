import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentformService } from '../studentform.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  
  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      city:new FormControl(),
      phone:new FormControl(),
      address:new FormControl(),
      photo:new FormControl(),
      placedin:new FormControl(),
      salary:new FormControl(),
      id:new FormControl(),
      actions:new FormControl(),

    }
  )
  constructor(private _studentformservice:StudentformService){}


  submit(){
    console.log(this.studentForm.value);

    this._studentformservice.createStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("vehicle created successfully")
      },
      (err:any)=>{
        alert("internal seerver error")
      }
    )
  }

}