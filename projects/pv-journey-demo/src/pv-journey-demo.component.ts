import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-pv-journey-demo',
  template: `
    <div class="journey-demo">
      <span>Hello from inside journey</span>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class PvJourneyDemoComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('current route ', this.route, this.router.url);
  }
}
