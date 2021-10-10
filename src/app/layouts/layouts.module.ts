import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@core/material/material.module';
import { FooterComponent } from './footer/footer.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopToolbarComponent,
    SideMenuComponent,
    TopMenuComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    FooterComponent,
    TopToolbarComponent,
    SideMenuComponent,
    TopMenuComponent,
  ],
})
export class LayoutsModule {}
