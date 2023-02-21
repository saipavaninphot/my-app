import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  constructor(private _httpclient:HttpClient) {}
  getBankings():Observable<any>{

    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }

  
}
