import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/home/home.module#HomeModule'},
  {path: 'callback', loadChildren: './pages/callback/callback.module#CallbackModule'},
  {path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule'},
  {path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
