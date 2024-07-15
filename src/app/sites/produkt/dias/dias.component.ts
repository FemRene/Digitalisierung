import {Component, OnInit} from '@angular/core';
import {DataPriceService} from "../../../service/data-price.service";

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrl: './dias.component.css'
})
export class DiasComponent implements OnInit {
  data: any = null;
  isLoading = true;

  constructor(private dataService: DataPriceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data['produkte']['dias'];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading data', error);
        this.isLoading = false;
      }
    );
  }
}
