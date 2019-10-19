import {Component} from '@angular/core';

import {ConvertAmountService} from '../convert-amount.service';


@Component({
  selector: 'app-jpn',
  templateUrl: './jpn.component.html',
  styleUrls : ['./jpn.component.css']
})

export class JpnComponent {
   jpnValue: number;


  constructor(private convertAmountService : ConvertAmountService) {
      this.convertAmountService.usdToJPN.subscribe( (data) =>
      this.jpnValue = data )
  }

  onJPNChange() {
    this.convertAmountService.convertToUSD(Number(this.jpnValue));
  }
}