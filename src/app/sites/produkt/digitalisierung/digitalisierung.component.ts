import {Component, Input, OnInit} from '@angular/core';
import {DataPriceService} from "../../../service/data-price.service";

@Component({
  selector: 'app-digitalisierung',
  templateUrl: './digitalisierung.component.html',
  styleUrl: './digitalisierung.component.css'
})
export class DigitalisierungComponent implements OnInit {
  data: any = null;
  isLoading = true;

  constructor(private dataService: DataPriceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data['produkte']['hi8'];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading data', error);
        this.isLoading = false;
      }
    );
  }
}
