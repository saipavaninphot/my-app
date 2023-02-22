import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public count:number=0;
  // ex:radio channel for subject
  public countsub:BehaviorSubject<any>=new BehaviorSubject(0);

  setValue(){
    this.countsub.next(this.count++);
  }

  getValue(){
    return this.countsub.asObservable();
  }





}
