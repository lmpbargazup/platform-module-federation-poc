import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (
        e instanceof ActivationStart &&
        e.snapshot.outlet === 'administration'
      )
        this.outlet.deactivate();
    });

    this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });
  }
}
