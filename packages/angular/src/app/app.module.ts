import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-angular', ce);
  }
}
