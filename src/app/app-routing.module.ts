import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizationComponent} from "./pages/authorization/authorization.component";

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
