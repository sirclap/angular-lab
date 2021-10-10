import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appRotate]',
})
export class RotateDirective {
  @Input()
  appRotate = 45;

  @Input()
  step = 15;

  @Output()
  onRotate = new EventEmitter<number>();

  @HostListener('click', ['$event']) onClick(evt: MouseEvent) {
    evt.shiftKey
      ? (this.appRotate -= this.step)
      : (this.appRotate += this.step);
    this.rotate(this.appRotate);
  }

  ngOnInit() {
    this.rotate(this.appRotate);
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.transition = 'all 0.2s ease-in-out';
  }

  rotate(amount: number) {
    this.appRotate = amount % 360;
    this.el.nativeElement.style.transform = 'rotate(' + this.appRotate + 'deg)';
    this.onRotate.emit(this.appRotate);
  }
}
