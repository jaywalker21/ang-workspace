import { NgModule } from '@angular/core';
import { PvJourneyDemoComponent } from './pv-journey-demo.component';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './pv-journey-demo-routing.module';

@NgModule({
  declarations: [
    PvJourneyDemoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [PvJourneyDemoComponent]
})
export class PvJourneyDemoModule { }
