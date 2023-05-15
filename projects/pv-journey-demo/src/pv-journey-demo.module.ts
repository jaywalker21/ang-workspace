import { NgModule } from '@angular/core';
import { PvJourneyDemoComponent } from './pv-journey-demo.component';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './pv-journey-demo-routing.module';

@NgModule({
  declarations: [
    PvJourneyDemoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ButtonModule
  ],
  exports: [PvJourneyDemoComponent]
})
export class PvJourneyDemoModule { }
