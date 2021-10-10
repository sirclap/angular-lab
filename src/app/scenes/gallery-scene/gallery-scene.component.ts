import { Component, OnInit } from '@angular/core';
import { GalleryService } from '@core/api/gallery/gallery.service';
import { Image } from '@core/api/gallery/model/image.model';

@Component({
  selector: 'app-gallery-scene',
  templateUrl: './gallery-scene.component.html',
  styleUrls: ['./gallery-scene.component.scss'],
})
export class GallerySceneComponent implements OnInit {
  images: Image[];
  selected: Image;

  constructor(public galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService
      .getAll()
      .subscribe((images: Image[]) => (this.images = images));
  }

  select(value: Image) {
    this.selected = value;
  }
}
