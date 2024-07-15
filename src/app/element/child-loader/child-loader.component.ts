import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataPriceService} from "../../service/data-price.service";

@Component({
  selector: 'app-child-loader',
  templateUrl: './child-loader.component.html',
  styleUrl: './child-loader.component.css'
})
export class ChildLoaderComponent {
  prices:any[] = [];
  url: string = "preise.json";

  constructor(router: Router, private http: HttpClient, private dataPriceService: DataPriceService) {
    console.log(router.url.replace("/produkt/",""))
  }
}
