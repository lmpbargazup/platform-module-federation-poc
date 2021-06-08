import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { endsWith } from './router.utils';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'mfe-angular',
        redirectTo: '/mfe-angular/home',
        pathMatch: 'full',
      },
      { matcher: endsWith('home'), component: HomeComponent },
      { matcher: endsWith('about'), component: AboutComponent },
      { matcher: endsWith('users'), component: UsersComponent },
    ]),
  ],
  declarations: [AboutComponent, UsersComponent, AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe-angular', ce);
  }
}
