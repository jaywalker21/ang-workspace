import { NgModule } from '@angular/core';
import { ClickTrackDirective } from './click.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ClickTrackDirective],
  exports: [ClickTrackDirective],
  imports: [CommonModule],
})
export class TelemetryModule {}
