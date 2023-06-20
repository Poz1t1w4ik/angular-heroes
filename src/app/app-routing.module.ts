import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'authorization',
    loadChildren: () =>
      import('./pages/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      )
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (m) => m.RegistrationModule
      )
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/authorization',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
