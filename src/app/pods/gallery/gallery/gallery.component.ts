import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '@core/api/gallery/model/image.model';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() set images(value: Image[]) {
    this._images = value;
    this.select(0);
  }

  @Output()
  onSelect = new EventEmitter<Image>();

  _images: Image[];
  selected: Image;
  basePath = environment.assets + '/images/';

  ngOnInit(): void {}

  select(index: number) {
    if (index >= 0 && index < this._images?.length) {
      this.selected = this._images[index];
      this.onSelect.emit(this.selected);
    }
  }
}
