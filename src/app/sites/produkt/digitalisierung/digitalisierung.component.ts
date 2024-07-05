import {Component, Input, OnInit} from '@angular/core';
import {DataPriceService} from "../../../service/data-price.service";

@Component({
  selector: 'app-digitalisierung',
  templateUrl: './digitalisierung.component.html',
  styleUrl: './digitalisierung.component.css'
})
export class DigitalisierungComponent implements OnInit {

  prices: any;

  constructor(private _service: DataPriceService) {}

  ngOnInit() {
    this.prices = this._service.getData()
    console.log(this.prices['produkte']['hi8']);
  }
}
