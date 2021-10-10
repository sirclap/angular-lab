import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.scss'],
})
export class RotationComponent implements OnInit {
  @Input() set src(value: string) {
    this._src = value;
  }

  _src: string;
  rotateStatus: number = 0;
  basePath = environment.assets + '/images/';

  constructor() {}

  ngOnInit(): void {}

  rotate(amount: number) {
    this.rotateStatus = amount;
  }
}
