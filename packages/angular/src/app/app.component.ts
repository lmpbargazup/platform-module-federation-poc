import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() public color = 'purple';

  constructor() {}

  logEvent(event) {
    console.log('chegou um evento no app-angular -> data:', event);
  }

  startEvent() {
    console.log('começando a escutar o shell');
    // @ts-ignore
    window.EventBus.addEventListener('shell', this.logEvent, true);
  }

  stopEvent() {
    console.log('parando de escutar o shell');
    // @ts-ignore
    window.EventBus.removeEventListener('shell', this.logEvent, true);
  }
}
