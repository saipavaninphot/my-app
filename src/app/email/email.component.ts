import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  public email:any=[];

  constructor(private _emailService:EmailService) {
    _emailService.getemail().subscribe(
      (data:any)=>{
        this.email = data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }
  
  
  completed(){
    this.email=this.email.filter((email:any)=> email.iscompleted==true)
    alert (this.email)
  }
  notcompleted(){
    this.email=this.email.filter((email:any)=> email.isnotcompleted==false)


  }
}
