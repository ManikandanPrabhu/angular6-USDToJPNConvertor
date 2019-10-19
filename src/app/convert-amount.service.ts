import { Injectable, EventEmitter }  from '@angular/core'; 

@Injectable ({providedIn: 'root'})
export class ConvertAmountService {
   usdToJPN = new EventEmitter();
   jpnToUSD: any = new EventEmitter<any>();


  convertToUSD(jpn) {
    this.jpnToUSD.emit(jpn *3);
  }

  convertToJPN(usd) {
      this.usdToJPN.emit(usd *2);
  }

}