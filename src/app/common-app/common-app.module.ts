import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationToolbarComponent } from './pagination-toolbar/pagination-toolbar.component';
import { MaterialModule } from '@core/material/material.module';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { RotateDirective } from './rotate/rotate.directive';

@NgModule({
  declarations: [
    PaginationToolbarComponent,
    ImageViewerComponent,
    RotateDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [PaginationToolbarComponent, ImageViewerComponent, RotateDirective],
})
export class CommonAppModule {}
