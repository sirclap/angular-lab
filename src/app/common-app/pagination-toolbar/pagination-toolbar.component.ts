import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-toolbar',
  templateUrl: './pagination-toolbar.component.html',
  styleUrls: ['./pagination-toolbar.component.scss'],
})
export class PaginationToolbarComponent implements OnInit {
  @Input()
  count: number;

  @Input()
  current: number = 0;

  @Output()
  onSelect = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  select(position: number) {
    if (position >= 0 && position <= this.count) {
      this.current = position;
      this.onSelect.emit(this.current);
    }
  }

  moveBy(amount: number) {
    this.select(this.current + amount);
  }

  first() {
    this.select(0);
  }

  last() {
    this.select(this.count - 1);
  }
}
