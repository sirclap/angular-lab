import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonAppModule } from '@common-app/common-app.module';

import { LoginContainerComponent } from './login/login-container/login-container.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@core/material/material.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { RotationComponent } from './rotation/rotation.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { ProfileContainerComponent } from './profile/profile-container/profile-container.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { AboutContainerComponent } from './about/about-container/about-container.component';
import { CrudContainerComponent } from './crud/crud-container/crud-container.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';

@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginFormComponent,
    GalleryComponent,
    RotationComponent,
    DashboardContainerComponent,
    ProfileContainerComponent,
    DashboardCardComponent,
    AboutContainerComponent,
    CrudContainerComponent,
    HomeContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonAppModule,
    IvyCarouselModule,
  ],
  exports: [
    LoginContainerComponent,
    GalleryComponent,
    RotationComponent,
    DashboardContainerComponent,
    ProfileContainerComponent,
    AboutContainerComponent,
    CrudContainerComponent,
    HomeContainerComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class PodsModule {}
