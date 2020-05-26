import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event
} from "@angular/router";

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LIST OF RICK AND MORTY CHARACTERS';
  loading = true;

  constructor(private router: Router ) {
    router.events.subscribe(
      (routerEvent: Event) => this.checkRouterEvent(routerEvent)
    );
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
