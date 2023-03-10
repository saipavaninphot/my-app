import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup({

   name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
   age:new FormControl("",[Validators.required,Validators.min(0), Validators.max(100)]),
   phone:new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
   email:new FormControl("",[Validators.required,Validators.email,emailDomain]),
   address:new FormGroup({
    state:new FormControl("",[Validators.required]),
    pin:new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)]),
   }),
   cards:new FormArray([]),
   type:new FormControl(),
   busFee:new FormControl(),
   hostelFee:new FormControl()
  }
  );

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
    // (as FormArray) must and should
  }

  add(){

    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl("",[Validators.required]),
        expiry:new FormControl(),
        cvv:new FormControl(),
      })
    )

  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);

  }


  submit(){
    console.log(this.userForm);
    this.userForm.markAllAsTouched();
    if(this.userForm.valid){
      alert("Form valid and submitted successfully")
      this.userForm.reset();
    }
  }

}

function emailDomain(control:AbstractControl): ValidationErrors | null{

  if(control.value.indexOf("@capgemini.com")==-1){
    return{"emailDomain":true};
  }
  else{
    return null;
  }


  return null;

}