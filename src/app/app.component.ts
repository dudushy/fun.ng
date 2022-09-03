import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fun';

  constructor(
    private router: Router
  ) {
    console.log('[AppComponent#constructor]');
  }

  redirectTo(url:string) {
    console.log('[AppComponent#redirectTo] url', url);
    this.router.navigateByUrl(`/${url}`);
  }
}
