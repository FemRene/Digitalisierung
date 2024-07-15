import {Component, OnInit} from '@angular/core';
import {DataPriceService} from "../../../service/data-price.service";

@Component({
  selector: 'app-papierbilder',
  templateUrl: './papierbilder.component.html',
  styleUrl: './papierbilder.component.css'
})
export class PapierbilderComponent implements OnInit {
  data: any = null;
  isLoading = true;

  constructor(private dataService: DataPriceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data['produkte']['papierbilder'];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading data', error);
        this.isLoading = false;
      }
    );
  }
}
