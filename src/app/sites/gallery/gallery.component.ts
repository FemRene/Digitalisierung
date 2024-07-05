import {Component, ElementRef} from '@angular/core';

import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  pictures: any[] | undefined;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.pictures = [
      "Blatt-1.jpg",
      "dj1.jpg",
      "Fisch-1.jpg",
      "graffi1.jpg",
      "graffi2.jpg",
      "Hotel-1.jpg",
      "Kuppel-1.jpg",
      "licht-1.jpg",
      "mast1.jpg",
      "Nepal01.jpg",
      "magnolia1.jpg",
      "Nepal02.jpg",
      "am%20Wehr1.jpg",
      "Pavilion1.jpg",
      "Pic-2-2.jpg",
      "pic-2-7bearbeitet.jpg",
      "pic-2-7orig.jpg",
      "pic-2-8bearbeitet.jpg",
      "pic-2-8orig.jpg",
      "pic-2-5.jpg",
      "pic-2-9bearbeitet.jpg",
      "pic-2-9orig.jpg",
      "Pic-3-2.jpg",
      "Pic-4-2.jpg",
      "Qualle-2.jpg",
      "Qualle-3.jpg",
      "Rose1.jpg",
      "Rose2.jpg",
      "schiene1.jpg",
      "sonne1.jpg",
      "wasser1.jpg",
      "wasser2.jpg"
    ];
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
      // Custom options
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",
          ],
          right: ["slideshow", "thumbs", "close"],
        },
      },
      //
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
