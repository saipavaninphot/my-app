import { Injectable } from '@angular/core';
import { Phone } from './phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

public phones:Phone[]=[
  {company:'samsung',price:20000},
  {company:'nokia',price:22000},
  {company:'lg',price:25000},
]
}
