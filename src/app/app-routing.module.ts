import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadChildren: () => import('./country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'analyze',
    loadChildren: () => import('./analyze/analyze.module').then( m => m.AnalyzePageModule)
  },
  {
    path: 'universities',
    loadChildren: () => import('./universities/universities.module').then( m => m.UniversitiesPageModule)
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'create-country',
    loadChildren: () => import('./create-country/create-country.module').then( m => m.CreateCountryPageModule)
  },
  {
    path: 'post-university',
    loadChildren: () => import('./post-university/post-university.module').then( m => m.PostUniversityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
