import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './sites/home-page/home-page.component';
import { ErrorPageComponent } from './sites/error-page/error-page.component';
import { HeaderComponent } from './element/header/header.component';
import { FooterComponent } from './element/footer/footer.component';
import { ProductCardComponent } from './element/product-card/product-card.component';
import { WissenswertesComponent } from './sites/info/wissenswertes/wissenswertes.component';
import { GalleryComponent } from './sites/gallery/gallery.component';
import { ContactComponent } from './sites/info/contact/contact.component';
import { ChildLoaderComponent } from './element/child-loader/child-loader.component';
import { ImpressumComponent } from './sites/info/impressum/impressum.component';
import { DatenschutzComponent } from './sites/info/datenschutz/datenschutz.component';
import { DigitalisierungComponent } from './sites/produkt/digitalisierung/digitalisierung.component';
import { DiasComponent } from './sites/produkt/dias/dias.component';
import { FilmComponent } from './sites/produkt/film/film.component';
import { EinzelDiasComponent } from './sites/produkt/einzel-dias/einzel-dias.component';
import { PapierbilderComponent } from './sites/produkt/papierbilder/papierbilder.component';
import { VersandComponent } from './sites/info/versand/versand.component';
import { ZahlungComponent } from './sites/info/zahlung/zahlung.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'galerie', component: GalleryComponent },
  { path: 'produkt', component: ChildLoaderComponent, children: [
      { path: 'digitalisierung', component: DigitalisierungComponent },
      { path: 'papierbilder', component: PapierbilderComponent },
      { path: 'dias', component: DiasComponent },
      { path: 'film', component: FilmComponent },
      { path: 'einzel_dias', component: EinzelDiasComponent },
    ]},
  { path: 'info', component: ChildLoaderComponent, children: [
      { path: 'kontakt', component: ContactComponent },
      { path: 'wissenswertes', component: WissenswertesComponent },
      { path: 'impressum', component: ImpressumComponent },
      { path: 'datenschutz', component: DatenschutzComponent },
      { path: 'versand', component: VersandComponent },
      { path: 'zahlung', component: ZahlungComponent },
    ] },
  { path: '**', component: ErrorPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    WissenswertesComponent,
    GalleryComponent,
    ContactComponent,
    ChildLoaderComponent,
    ImpressumComponent,
    DatenschutzComponent,
    DigitalisierungComponent,
    DiasComponent,
    FilmComponent,
    EinzelDiasComponent,
    PapierbilderComponent,
    VersandComponent,
    ZahlungComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
