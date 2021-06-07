import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const PREFIX = 'angular';

const withPrefix = (path) => `${PREFIX}${path}`;

const routes: Routes = [
  { path: '', redirectTo: '/angular/home', pathMatch: 'full' },
  {
    path: withPrefix('/home'),
    component: HomeComponent,
  },
  {
    path: withPrefix('/about'),
    component: AboutComponent,
  },
  {
    path: withPrefix('/users'),
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
