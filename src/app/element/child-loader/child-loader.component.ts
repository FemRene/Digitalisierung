import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataPriceService} from "../../service/data-price.service";

@Component({
  selector: 'app-child-loader',
  templateUrl: './child-loader.component.html',
  styleUrl: './child-loader.component.css'
})
export class ChildLoaderComponent implements OnInit{
  prices:any;
  url: string = "../../../../preise.json";

  constructor(router: Router, private http: HttpClient, private dataPriceService: DataPriceService) {
    console.log(router.url.replace("/produkt/",""))
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.prices = res;
    });
    this.navigateWithData(this.prices)
  }

  navigateWithData(data: any) {
    this.dataPriceService.setData(data);
  }
}
