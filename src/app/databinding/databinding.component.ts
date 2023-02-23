import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  public name:string="abcd"
  public number:number=20;
  public isIndian:boolean=true;
  public phone:number=91;

  submit(){
    alert("submit clicked")
  }
  key(){

    alert("key pressed in input");
  }
  cancel(){
    alert("mouse entered in cancel button")
  }
  test(){
    alert("double clicked");
  }
  enter(){
    alert("mouse entered")
  }
  leave(){
    alert("mouse leaved")
  }
  

}
