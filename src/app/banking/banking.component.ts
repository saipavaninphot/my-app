import { Component } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  public bankings:any=[];

  constructor(private _bankingService:BankingService){
    _bankingService.getBankings().subscribe(
      (data:any)=>{
        this.bankings = data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
    
  }
  
}
