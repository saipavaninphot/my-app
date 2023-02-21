import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

public phones:any=[
  {company:'samsung',price:20000},
  {company:'nokia',price:22000},
  {company:'lg',price:25000},
]
}
