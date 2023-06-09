import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'devices',
    loadChildren: () =>
      import('./modules/devices/devices.module').then(
        (mod) => mod.DevicesModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./modules/support/support.module').then(
        (mod) => mod.SupportModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
