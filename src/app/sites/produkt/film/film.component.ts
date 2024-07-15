import {Component, OnInit} from '@angular/core';
import {DataPriceService} from "../../../service/data-price.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit {
  data: any = null;
  isLoading = true;

  constructor(private dataService: DataPriceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data['produkte']['film'];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading data', error);
        this.isLoading = false;
      }
    );
  }
}
