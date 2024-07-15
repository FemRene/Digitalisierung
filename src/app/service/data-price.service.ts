import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataPriceService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get("preise.json");
  }
}
