import {Component, OnInit} from '@angular/core';
import {ConvertAmountService} from '../convert-amount.service';

@Component({
  selector : 'app-usd',
  templateUrl : './usd.component.html',
  styleUrls : ['./usd.component.css']
})

export class UsdComponent implements OnInit {
   usdValue;

constructor(private convertAmountService : ConvertAmountService) {
      this.convertAmountService.jpnToUSD.subscribe( (data) =>
      this.usdValue = data )
  }

  ngOnInit() {
    console.log("shklslkfsd", this.convertAmountService);
// 
  }
  onUsdChange() {
    console.log("value vhanged", this.usdValue);
    this.convertAmountService.convertToJPN(Number(this.usdValue));
  }
}