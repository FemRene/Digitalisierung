import {Component, OnInit} from '@angular/core';
import {DataPriceService} from "../../../service/data-price.service";

@Component({
  selector: 'app-einzel-dias',
  templateUrl: './einzel-dias.component.html',
  styleUrl: './einzel-dias.component.css'
})
export class EinzelDiasComponent implements OnInit {
  data: any = null;
  isLoading = true;

  constructor(private dataService: DataPriceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data['produkte']['einzel-dias'];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading data', error);
        this.isLoading = false;
      }
    );
  }
}
