import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
  @Input() set src(value: string) {
    this._src = value;
    this.scale = 1;
  }

  @Input()
  incremento: number = 0.5;

  _src: string;
  scale: number = 1;

  constructor() {}

  ngOnInit(): void {}

  zoomIn() {
    this.scale += this.incremento;
  }

  zoomOut() {
    if (this.scale >= 1) {
      this.scale -= this.incremento;
    }
  }
}
