import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/auth/guard/auth.guard';
import { AuthPublicGuard } from '@core/auth/guard/auth-public.guard';
import { LayoutsModule } from '@layouts/layouts.module';
import { ScenesModule } from '@scenes/scenes.module';
import { HomeSceneComponent } from '@scenes/home-scene/home-scene.component';
import { AboutSceneComponent } from '@scenes/about-scene/about-scene.component';
import { LoginSceneComponent } from '@scenes/login-scene/login-scene.component';
import { DashboardSceneComponent } from '@scenes/dashboard-scene/dashboard-scene.component';
import { GallerySceneComponent } from '@scenes/gallery-scene/gallery-scene.component';
import { CrudSceneComponent } from '@scenes/crud-scene/crud-scene.component';
import { ProfileSceneComponent } from '@scenes/profile-scene/profile-scene.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthPublicGuard],
    component: HomeSceneComponent,
  },
  {
    path: 'about',
    canActivate: [AuthPublicGuard],
    component: AboutSceneComponent,
  },
  {
    path: 'login',
    canActivate: [AuthPublicGuard],
    component: LoginSceneComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardSceneComponent,
  },
  {
    path: 'gallery',
    canActivate: [AuthGuard],
    component: GallerySceneComponent,
  },

  {
    path: 'crud',
    canActivate: [AuthGuard],
    component: CrudSceneComponent,
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileSceneComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    LayoutsModule,
    ScenesModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
