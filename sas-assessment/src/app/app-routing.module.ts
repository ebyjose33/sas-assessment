import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreloadAllModules } from '@angular/router';
import { CustomPreloadingService } from './preloading/custom-preloading.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
    .then(m => m.DashboardModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module')
    .then(m => m.SettingsModule),
    data: { preload: true}
  },
  {
    path: 'reports',
    loadChildren: () => 
      import ('./reports/reports.module')
    .then(m => m.ReportsModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
